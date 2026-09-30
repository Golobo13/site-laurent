import React, { useState } from "react";
import PageShell from "../PageShell.jsx";
import { Section, Card, Input, Select, Textarea, RequiredFieldsModal } from "../shared.jsx";

const REQUIRED_FIELDS = ["firstName", "lastName", "email", "phone", "companyName"];

export default function ContactPage() {
  const [form, setForm] = useState({
    civility: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    city: "",
    sector: "",
    message: "",
    consent: false,
    website: "",
  });
  const [status, setStatus] = useState("idle");
  const [emailError, setEmailError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [requiredPopupOpen, setRequiredPopupOpen] = useState(false);

  const isEmailValid = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validateEmailField = () => {
    if (!form.email) {
      setEmailError("");
      return true;
    }
    const ok = isEmailValid(form.email);
    setEmailError(ok ? "" : "Adresse email invalide (ex : vous@domaine.fr).");
    return ok;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const missing = {};
    REQUIRED_FIELDS.forEach((key) => {
      if (!String(form[key] || "").trim()) missing[key] = true;
    });

    if (Object.keys(missing).length > 0) {
      setFieldErrors(missing);
      setRequiredPopupOpen(true);
      return;
    }
    setFieldErrors({});

    if (!isEmailValid(form.email)) {
      setEmailError("Adresse email invalide (ex : vous@domaine.fr).");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setStatus("success");
      setForm({
        civility: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        city: "",
        sector: "",
        message: "",
        consent: false,
        website: "",
      });
      setEmailError("");
      setFieldErrors({});
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <PageShell>
      <Section id="contact" kicker="Parlez-nous de vous, on vous recontacte vite" showCta={false}>
        <div className="mx-auto max-w-2xl">
          <Card>
            <form className="space-y-4" onSubmit={onSubmit}>
              {/* Honeypot anti-spam : champ invisible, seuls les robots le remplissent */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />
              <div className="grid gap-4 md:grid-cols-3">
                <Select
                  label="Civilité"
                  placeholder="Sélectionner…"
                  value={form.civility}
                  onChange={(e) => setForm({ ...form, civility: e.target.value })}
                  options={[
                    { value: "madame", label: "Madame" },
                    { value: "monsieur", label: "Monsieur" },
                  ]}
                />
                <Input
                  label="Prénom"
                  required
                  blink={fieldErrors.firstName}
                  value={form.firstName}
                  onChange={(e) => {
                    setForm({ ...form, firstName: e.target.value });
                    if (fieldErrors.firstName) setFieldErrors({ ...fieldErrors, firstName: false });
                  }}
                />
                <Input
                  label="Nom"
                  required
                  blink={fieldErrors.lastName}
                  value={form.lastName}
                  onChange={(e) => {
                    setForm({ ...form, lastName: e.target.value });
                    if (fieldErrors.lastName) setFieldErrors({ ...fieldErrors, lastName: false });
                  }}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="Email"
                  type="email"
                  required
                  blink={fieldErrors.email}
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (emailError) setEmailError("");
                    if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: false });
                  }}
                  onBlur={validateEmailField}
                  error={emailError}
                />
                <Input
                  label="Téléphone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  required
                  blink={fieldErrors.phone}
                  value={form.phone}
                  onChange={(e) => {
                    const digitsOnly = e.target.value.replace(/\D/g, "");
                    setForm({ ...form, phone: digitsOnly });
                    if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: false });
                  }}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="Raison sociale"
                  required
                  blink={fieldErrors.companyName}
                  value={form.companyName}
                  onChange={(e) => {
                    setForm({ ...form, companyName: e.target.value });
                    if (fieldErrors.companyName) setFieldErrors({ ...fieldErrors, companyName: false });
                  }}
                />
                <Input
                  label="Ville"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                />
              </div>
              <Input
                label="Secteur d'activité"
                value={form.sector}
                onChange={(e) => setForm({ ...form, sector: e.target.value })}
              />
              <Textarea
                label="Message"
                required
                placeholder="Parlez‑moi de votre entreprise, de vos objectifs et de vos questions."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <label className="flex items-start gap-3 text-sm text-slate-300">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  required
                  className="mt-1"
                />
                <span>
                  J'accepte que mes données soient utilisées pour me recontacter (RGPD). Voir <a className="underline" href="/mentions-legales">mentions légales</a>.
                </span>
              </label>

              <button
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-medium text-white hover:bg-purple-500 disabled:opacity-60"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Envoi…" : "Envoyer le message"}
              </button>

              {status === "success" && (
                <p className="success-pulse-strong rounded-xl border border-purple-700/40 bg-purple-700/10 p-3 font-medium text-purple-100">
                  Merci ! Votre message a bien été reçu. Notre équipe reviendra vers vous très prochainement.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-xl border border-red-700/40 bg-red-700/10 p-3 text-red-200">
                  Oups, une erreur est survenue. Réessayez plus tard ou contactez‑moi par téléphone.
                </p>
              )}
            </form>
          </Card>
        </div>
      </Section>

      <RequiredFieldsModal open={requiredPopupOpen} onClose={() => setRequiredPopupOpen(false)} />
    </PageShell>
  );
}
