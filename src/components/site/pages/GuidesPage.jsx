import React, { useState } from "react";
import { FileText, ArrowRight } from "lucide-react";
import PageShell from "../PageShell.jsx";
import { Section, RESOURCES, DownloadModal, RequiredFieldsModal } from "../shared.jsx";

// Le prénom et la raison sociale ne sont obligatoires sur aucun des 4 guides.
const DL_REQUIRED_FIELDS = ["lastName", "email", "phone"];
// Pour le guide "Vous allez créer votre entreprise" : le téléphone n'est pas
// non plus obligatoire (l'entreprise n'est pas encore créée).
const PRE_CREATION_SLUG = "20-points-controle-creation";
const PRE_CREATION_OPTIONAL_FIELDS = ["phone"];

export default function GuidesPage() {
  const [downloadResource, setDownloadResource] = useState(null);
  const [dlForm, setDlForm] = useState({
    civility: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    city: "",
    sector: "",
    consent: false,
    website: "",
  });
  const [dlStatus, setDlStatus] = useState("idle");
  const [dlEmailError, setDlEmailError] = useState("");
  const [dlFieldErrors, setDlFieldErrors] = useState({});
  const [dlRequiredPopupOpen, setDlRequiredPopupOpen] = useState(false);

  const closeDownloadModal = () => {
    setDownloadResource(null);
    setDlStatus("idle");
    setDlForm({
      civility: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      city: "",
      sector: "",
      consent: false,
      website: "",
    });
    setDlEmailError("");
    setDlFieldErrors({});
  };

  const onDownloadSubmit = async (e) => {
    e.preventDefault();
    if (!downloadResource) return;

    const isPreCreation = downloadResource.slug === PRE_CREATION_SLUG;
    const requiredFields = isPreCreation
      ? DL_REQUIRED_FIELDS.filter((key) => !PRE_CREATION_OPTIONAL_FIELDS.includes(key))
      : DL_REQUIRED_FIELDS;

    const missing = {};
    requiredFields.forEach((key) => {
      if (!String(dlForm[key] || "").trim()) missing[key] = true;
    });

    if (Object.keys(missing).length > 0) {
      setDlFieldErrors(missing);
      setDlRequiredPopupOpen(true);
      return;
    }
    setDlFieldErrors({});

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dlForm.email)) {
      setDlEmailError("Adresse email invalide (ex : vous@domaine.fr).");
      return;
    }

    setDlStatus("loading");
    try {
      const res = await fetch("/api/download-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...dlForm, resourceId: downloadResource.slug }),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setDlStatus("success");
    } catch (err) {
      setDlStatus("error");
    }
  };

  return (
    <PageShell>
      <Section
        id="ressources"
        kicker={
          <>
            Téléchargez nos guides pratiques{" "}
            <span className="animate-pulse text-[#e2583f]">gratuits</span>
          </>
        }
      >
        <p className="mb-8 max-w-3xl text-slate-300">
          4 guides courts et opérationnels pour faire un premier état des lieux de votre projet ou de votre entreprise.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {RESOURCES.map((r, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setDownloadResource(r)}
              className="group relative block w-full text-left"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full backdrop-blur-xl bg-slate-900/60 border border-slate-700/60 rounded-2xl p-6 shadow-2xl flex gap-4 group-hover:border-purple-500/40 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-3 text-purple-300 backdrop-blur-sm border border-purple-500/20">
                    <r.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-200">
                    {r.tag}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-purple-300 transition-colors leading-snug">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{r.description}</p>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-purple-300 group-hover:text-purple-200">
                    <FileText className="h-4 w-4" />
                    Télécharger le PDF
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Section>

      <DownloadModal
        resource={downloadResource}
        form={dlForm}
        setForm={setDlForm}
        status={dlStatus}
        fieldErrors={dlFieldErrors}
        setFieldErrors={setDlFieldErrors}
        emailError={dlEmailError}
        setEmailError={setDlEmailError}
        onSubmit={onDownloadSubmit}
        onClose={closeDownloadModal}
      />

      <RequiredFieldsModal open={dlRequiredPopupOpen} onClose={() => setDlRequiredPopupOpen(false)} />
    </PageShell>
  );
}
