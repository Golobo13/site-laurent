// Fonction serverless Vercel — reçoit les soumissions du formulaire de
// téléchargement de guide (section "Guides pratiques" du site) et envoie le
// PDF demandé en pièce jointe, par email, au visiteur, via l'API Resend
// (https://resend.com). Envoie aussi une notification interne (lead) à
// CONTACT_TO_EMAIL, comme pour le formulaire de contact — non bloquante :
// si elle échoue, l'envoi du guide au visiteur n'est pas remis en cause.
//
// Variables d'environnement utilisées (déjà configurées pour /api/contact) :
//   RESEND_API_KEY     — clé API Resend (obligatoire)
//   CONTACT_TO_EMAIL    — adresse qui reçoit les notifications de téléchargement
//   CONTACT_FROM_EMAIL  — adresse d'expédition (domaine vérifié dans Resend)

// Association slug (envoyé par le front) -> fichier réel dans /public/ressources
// et titre du guide. Volontairement dupliqué avec le tableau RESOURCES du
// composant React plutôt que partagé, pour ne jamais faire confiance à un nom
// de fichier envoyé par le client (on ne résout que via ce mapping serveur).
const RESOURCES = {
  "20-points-controle-creation": {
    file: "20-points-de-controle-avant-de-creer-sa-societe.pdf",
    title: "20 points de contrôle avant de créer sa société",
  },
  rentabilite: {
    file: "votre-entreprise-est-elle-rentable.pdf",
    title: "Votre entreprise est-elle aussi rentable qu'elle devrait l'être ?",
  },
  difficulte: {
    file: "entreprise-en-difficulte.pdf",
    title: "Entreprise en difficulté : les signaux à surveiller",
  },
  cession: {
    file: "cession-vente-entreprise.pdf",
    title: "Êtes-vous prêt à vendre votre entreprise ?",
  },
};

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Méthode non autorisée." });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const {
      civility,
      firstName,
      lastName,
      email,
      phone,
      companyName,
      city,
      sector,
      consent,
      website,
      resourceId,
    } = body;

    // Honeypot anti-spam : ce champ est invisible pour un humain, seuls les bots le remplissent.
    if (website) {
      return res.status(200).json({ ok: true });
    }

    const resource = RESOURCES[resourceId];
    if (!resource) {
      return res.status(400).json({ error: "Guide demandé introuvable." });
    }

    if (!firstName || !lastName || !email || !phone || !companyName || !consent) {
      return res.status(400).json({ error: "Champs requis manquants." });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return res.status(400).json({ error: "Adresse email invalide." });
    }

    const phoneOk = /^[0-9]+$/.test(phone);
    if (!phoneOk) {
      return res.status(400).json({ error: "Le téléphone ne doit contenir que des chiffres." });
    }

    const name = `${firstName} ${lastName}`.trim();
    const civilityLabel =
      civility === "madame" ? "Madame" :
      civility === "monsieur" ? "Monsieur" :
      "—";

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY manquante dans les variables d'environnement Vercel.");
      return res.status(500).json({ error: "Configuration serveur incomplète." });
    }

    const to = process.env.CONTACT_TO_EMAIL || "l.garnero@expertgcl.fr";
    const from = process.env.CONTACT_FROM_EMAIL || "LG Conseil <onboarding@resend.dev>";

    // Les fichiers de /public sont servis en statique par Vercel et ne sont pas
    // accessibles via le système de fichiers depuis une fonction serverless :
    // on récupère donc le PDF par HTTP, sur ce même déploiement, pour le
    // joindre à l'email.
    const proto = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers.host;
    const fileUrl = `${proto}://${host}/ressources/${resource.file}`;

    let base64;
    try {
      const fileRes = await fetch(fileUrl);
      if (!fileRes.ok) throw new Error(`HTTP ${fileRes.status}`);
      const arrayBuffer = await fileRes.arrayBuffer();
      base64 = Buffer.from(arrayBuffer).toString("base64");
    } catch (fileErr) {
      console.error("Impossible de récupérer le PDF à joindre:", fileUrl, fileErr);
      return res.status(500).json({ error: "Le guide demandé est momentanément indisponible." });
    }

    const recap = `
      <p><strong>Guide demandé :</strong> ${escapeHtml(resource.title)}</p>
      <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
      <p><strong>Civilité :</strong> ${escapeHtml(civilityLabel)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Téléphone :</strong> ${escapeHtml(phone) || "—"}</p>
      <p><strong>Raison sociale :</strong> ${escapeHtml(companyName) || "—"}</p>
      <p><strong>Ville :</strong> ${escapeHtml(city) || "—"}</p>
      <p><strong>Secteur d'activité :</strong> ${escapeHtml(sector) || "—"}</p>
    `;

    const guideHtml = `
      <p>Bonjour ${escapeHtml(firstName)},</p>
      <p>Merci pour votre intérêt ! Vous trouverez votre guide <strong>${escapeHtml(resource.title)}</strong> en pièce jointe de cet email.</p>
      <p>N'hésitez pas à nous contacter si vous avez la moindre question.</p>
      <p>Cordialement,<br/>L'équipe LG Conseil</p>
    `;

    const notifHtml = `
      <h2>Téléchargement de guide — site LG Conseil</h2>
      ${recap}
    `;

    // Les deux emails (guide au visiteur + notification interne) partent en
    // parallèle plutôt que l'un après l'autre, pour réduire le temps total
    // d'exécution de la fonction (une exécution trop longue sur un plan
    // Vercel avec délai d'exécution limité pourrait sinon couper la fonction
    // avant l'envoi de la notification interne, sans que le visiteur ni nous
    // ne le sachions).
    const [guideResult, notifResult] = await Promise.allSettled([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [email],
          subject: `Votre guide : ${resource.title} — LG Conseil`,
          html: guideHtml,
          attachments: [{ filename: resource.file, content: base64 }],
        }),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `Téléchargement guide : ${resource.title} — ${name}`,
          html: notifHtml,
        }),
      }),
    ]);

    // 1) Email au visiteur, avec le PDF en pièce jointe — c'est le cœur de la
    // fonctionnalité : si cet envoi échoue, on renvoie une erreur au front.
    if (guideResult.status !== "fulfilled" || !guideResult.value.ok) {
      if (guideResult.status === "fulfilled") {
        const errText = await guideResult.value.text();
        console.error("Erreur Resend (envoi du guide):", guideResult.value.status, errText);
      } else {
        console.error("Erreur réseau lors de l'envoi du guide:", guideResult.reason);
      }
      return res.status(502).json({ error: "Erreur lors de l'envoi de l'email." });
    }

    // 2) Notification interne (lead) : un échec ici ne doit pas faire échouer
    // la soumission (le guide est déjà parti au visiteur) : on log l'erreur
    // sans bloquer la réponse, comme pour le formulaire de contact.
    if (notifResult.status !== "fulfilled" || !notifResult.value.ok) {
      if (notifResult.status === "fulfilled") {
        const errText = await notifResult.value.text();
        console.error("Erreur Resend (notification interne de téléchargement):", notifResult.value.status, errText);
      } else {
        console.error("Erreur réseau lors de l'envoi de la notification interne:", notifResult.reason);
      }
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Erreur /api/download-guide:", err);
    return res.status(500).json({ error: "Erreur serveur." });
  }
}
