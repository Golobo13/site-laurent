// Fonction serverless Vercel — reçoit les soumissions du formulaire de contact
// du site et les envoie par email via l'API Resend (https://resend.com).
//
// Variables d'environnement à configurer sur Vercel (Project Settings > Environment Variables) :
//   RESEND_API_KEY     — clé API Resend (obligatoire)
//   CONTACT_TO_EMAIL    — adresse qui reçoit les messages (défaut : l.garnero@expertgcl.fr)
//   CONTACT_FROM_EMAIL  — adresse d'expédition, doit venir d'un domaine vérifié dans Resend
//                          (défaut : l'adresse de test "onboarding@resend.dev", limitée en envoi)

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
    const { civility, civilityOther, firstName, lastName, email, phone, companyName, city, sector, message, consent, website } = body;

    // Honeypot anti-spam : ce champ est invisible pour un humain, seuls les bots le remplissent.
    if (website) {
      return res.status(200).json({ ok: true });
    }

    if (!firstName || !lastName || !email || !message || !consent) {
      return res.status(400).json({ error: "Champs requis manquants." });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return res.status(400).json({ error: "Adresse email invalide." });
    }

    const name = `${firstName} ${lastName}`.trim();
    const civilityLabel =
      civility === "madame" ? "Madame" :
      civility === "monsieur" ? "Monsieur" :
      civility === "libre" ? (civilityOther || "Autre (non précisé)") :
      "—";

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY manquante dans les variables d'environnement Vercel.");
      return res.status(500).json({ error: "Configuration serveur incomplète." });
    }

    const to = process.env.CONTACT_TO_EMAIL || "l.garnero@expertgcl.fr";
    const from = process.env.CONTACT_FROM_EMAIL || "LG Conseil <onboarding@resend.dev>";

    const html = `
      <h2>Nouveau message depuis le site LG Conseil</h2>
      <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
      <p><strong>Civilité :</strong> ${escapeHtml(civilityLabel)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Téléphone :</strong> ${escapeHtml(phone) || "—"}</p>
      <p><strong>Raison sociale :</strong> ${escapeHtml(companyName) || "—"}</p>
      <p><strong>Ville :</strong> ${escapeHtml(city) || "—"}</p>
      <p><strong>Secteur d'activité :</strong> ${escapeHtml(sector) || "—"}</p>
      <p><strong>Message :</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Nouveau message de ${name} — site LG Conseil`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error("Erreur Resend:", resendRes.status, errText);
      return res.status(502).json({ error: "Erreur lors de l'envoi de l'email." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Erreur /api/contact:", err);
    return res.status(500).json({ error: "Erreur serveur." });
  }
}
