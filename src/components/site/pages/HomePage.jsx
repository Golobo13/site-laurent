import React, { useState } from "react";
import {
  CalendarClock,
  Target,
  User,
  Building2,
  Zap,
  Linkedin,
  MessagesSquare,
  TrendingUp,
  Sparkles,
  FileText,
  Star,
  HelpCircle,
  Newspaper,
  Phone,
  ArrowRight,
} from "lucide-react";
import PageShell from "../PageShell.jsx";
import { PillButton, MagicCard, LogoLightbox, SITE, formatPhoneFR, phoneHref } from "../shared.jsx";

const PAGES = [
  {
    href: "/missions",
    icon: TrendingUp,
    title: "Nos missions",
    description: "Pilotage, création, reprise, cession et transmission d'entreprise.",
  },
  {
    href: "/pourquoi-un-expert",
    icon: Sparkles,
    title: "Pourquoi un expert en gestion",
    description: "Un métier mal connu, une valeur très concrète.",
  },
  {
    href: "/guides-pratiques",
    icon: FileText,
    title: "Téléchargez nos guides pratiques",
    description: "4 guides gratuits pour faire un premier état des lieux.",
  },
  {
    href: "/rendez-vous",
    icon: CalendarClock,
    title: "Prenons rendez-vous",
    description: "Réservez un appel découverte gratuit de 30 minutes.",
  },
  {
    href: "/temoignages",
    icon: Star,
    title: "Témoignages",
    description: "Ce que disent nos clients de notre accompagnement.",
  },
  {
    href: "/faq",
    icon: HelpCircle,
    title: "Foire aux questions",
    description: "Toutes les réponses à vos questions les plus fréquentes.",
  },
  {
    href: "/contact",
    icon: MessagesSquare,
    title: "Parlez-nous de vous…",
    description: "Racontez-nous votre situation, on vous recontacte vite.",
  },
  {
    href: "/publications",
    icon: Newspaper,
    title: "Publications",
    description: "Les articles et réflexions de Laurent sur LinkedIn.",
  },
  {
    href: "/coordonnees",
    icon: Phone,
    title: "Contact",
    description: "Toutes nos coordonnées : téléphone, email, LinkedIn.",
  },
];

export default function HomePage() {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <PageShell>
      {/* --- Hero --- */}
      <section id="accueil" className="relative overflow-hidden pt-[4px] pb-20 md:pt-[52px] md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10 relative">
          <div className="grid min-w-0 items-start gap-12 md:grid-cols-2 xl:grid-cols-[1fr_600px]">
            <div className="relative z-10 min-w-0">
              <style>{`
                @media (min-width: 1280px) {
                  .hero-fluid-line1 {
                    font-size: clamp(22px, 4.04vw - 30px, 43px);
                  }
                  .hero-fluid-line2 {
                    font-size: clamp(17px, 3.46vw - 27px, 35px);
                  }
                }
              `}</style>
              <h1 className="break-words text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
                <span className="hero-fluid-line1 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Experts en gestion d'entreprise à Marseille
                </span>
                <span className="hero-fluid-line2 block bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Accompagnement reprise, création, cession & pilotage
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                <strong>Experts en gestion d'entreprise à Marseille</strong>, nous accompagnons les créateurs et dirigeants (TPE/PME) pour clarifier la vision, sécuriser la trésorerie, et améliorer la rentabilité.
              </p>

              <div className="grid gap-4 text-sm text-slate-300 md:grid-cols-2">
                {[
                  { text: "Diagnostic gratuit et sans engagement", icon: Target },
                  { text: "Langage simple, concret, humain", icon: User },
                  { text: "Coordination avec votre expert‑comptable", icon: Building2 },
                  { text: "Intervention à Marseille & distance", icon: Zap },
                ].map((item, i) => (
                  <div key={i} className="group flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/30 transition-colors">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <item.icon className="relative h-4 w-4 text-purple-400" />
                    </div>
                    <span className="group-hover:text-slate-200 transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-stretch gap-4">
                <PillButton href="/rendez-vous" className="self-start justify-start">
                  <CalendarClock className="h-5 w-5 flex-shrink-0" />
                  <span className="text-justify leading-tight">
                    Réservez un appel<br />
                    découverte <span className="animate-pulse text-[#e2583f]">gratuit</span>
                  </span>
                </PillButton>

                <PillButton href="/contact" className="self-start justify-start">
                  <MessagesSquare className="h-5 w-5 flex-shrink-0" />
                  <span className="text-justify leading-tight">
                    Parlez-nous de vous,<br />
                    on vous recontacte <span className="animate-pulse text-[#e2583f]">vite</span>
                  </span>
                </PillButton>
              </div>
            </div>

            <div className="relative min-w-0 space-y-4 md:ml-auto max-w-xl">
              <MagicCard className="min-h-[352px]">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxImage({ src: "/_FCX1441.jpg", alt: "Laurent Garnero - Expert en gestion" })
                  }
                  className="mb-4 flex w-full items-center gap-3 rounded-xl text-left transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  aria-label="Agrandir la photo de Laurent"
                >
                  <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-slate-800/50 flex items-center justify-center border border-slate-600/50">
                    <img
                      src="/_FCX1441.jpg"
                      alt="Laurent Garnero - Expert en gestion"
                      className="w-full h-full object-cover object-top rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Laurent Garnero</h3>
                    <p className="text-sm text-purple-300">Expert en gestion</p>
                  </div>
                </button>

                <a
                  href={phoneHref(SITE.phone)}
                  className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-purple-200 hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  {formatPhoneFR(SITE.phone)}
                </a>

                <p className="text-slate-300 leading-relaxed mb-4">
                  Plus de 20 ans d'expérience entrepreneuriale et en pilotage d'entreprises. Mon rôle : transformer vos
                  chiffres en décisions et vous aider à transformer vos décisions en résultats.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://bnifrance.fr/fr/chapterdetail?chapterId=buI4TNm6URALTJGIuVUuKw%3D%3D&name=13-77%20BNI%20Marseille%20Gyptis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-shrink-0 items-center gap-2.5 rounded-full border border-red-500/40 bg-gradient-to-r from-red-500/20 to-red-600/20 py-1.5 pl-1.5 pr-4 backdrop-blur-sm transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    <img
                      src="/bni-logo.jpg"
                      alt="BNI Marseille"
                      className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                    />
                    <span className="whitespace-nowrap text-sm font-medium text-red-200">BNI Marseille</span>
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxImage({ src: "/gcl-logo.png", alt: "GCL, les experts du Conseil" })
                    }
                    className="inline-flex flex-shrink-0 items-center gap-2.5 rounded-full border border-green-500/40 bg-gradient-to-r from-green-500/20 to-emerald-500/20 py-1.5 pl-1.5 pr-4 backdrop-blur-sm transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-green-400"
                    aria-label="Agrandir le logo GCL"
                  >
                    <img
                      src="/gcl-logo.png"
                      alt="GCL, les experts du Conseil"
                      className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                    />
                    <span className="whitespace-nowrap text-sm font-medium text-green-200">Réseau GCL</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxImage({ src: "/bpifrance-creation-logo.jpg", alt: "Bpifrance Création" })
                    }
                    className="inline-flex flex-shrink-0 items-center gap-2.5 rounded-full border border-purple-500/40 bg-gradient-to-r from-purple-500/20 to-blue-500/20 py-1.5 pl-1.5 pr-4 backdrop-blur-sm transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    aria-label="Agrandir le logo Bpifrance Création"
                  >
                    <img
                      src="/bpifrance-creation-logo.jpg"
                      alt="Bpifrance Création"
                      className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium leading-tight text-purple-200">
                      Conseiller en création d'entreprise
                      <br />
                      certifié BPI
                    </span>
                  </button>
                  <a
                    href="https://linkedin.com/in/laurent-garnero-13016"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-shrink-0 items-center gap-2.5 rounded-full border border-sky-500/40 bg-gradient-to-r from-sky-500/20 to-blue-600/20 py-1.5 pl-1.5 pr-4 backdrop-blur-sm transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-sky-500">
                      <Linkedin className="h-6 w-6 text-white" />
                    </span>
                    <span className="whitespace-nowrap text-sm font-medium text-sky-200">LinkedIn</span>
                  </a>
                </div>
              </MagicCard>

              <MagicCard className="min-h-[352px]">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxImage({
                      src: "/georges-louis-bonnifay.jpg",
                      alt: "Georges-Louis Bonnifay - Copilote des chefs d'entreprise",
                    })
                  }
                  className="mb-4 flex w-full items-center gap-3 rounded-xl text-left transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  aria-label="Agrandir la photo de Georges-Louis"
                >
                  <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-slate-800/50 flex items-center justify-center border border-slate-600/50">
                    <img
                      src="/georges-louis-bonnifay.jpg"
                      alt="Georges-Louis Bonnifay - Copilote des chefs d'entreprise"
                      className="w-full h-full object-cover object-top rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Georges-Louis Bonnifay</h3>
                    <p className="text-sm text-purple-300">Copilote des chefs d'entreprise</p>
                  </div>
                </button>

                <a
                  href={phoneHref("+33 6 07 83 18 18")}
                  className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-purple-200 hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  {formatPhoneFR("+33 6 07 83 18 18")}
                </a>

                <p className="text-slate-300 leading-relaxed mb-4">
                  40 ans d'expérience entrepreneuriale. Mon rôle : vous accompagner sur la trésorerie, la rentabilité,
                  le développement, ainsi que la cession et la reprise d'entreprise.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setLightboxImage({ src: "/bni-logo.jpg", alt: "BNI Marseille" })}
                    className="inline-flex flex-shrink-0 items-center gap-2.5 rounded-full border border-red-500/40 bg-gradient-to-r from-red-500/20 to-red-600/20 py-1.5 pl-1.5 pr-4 backdrop-blur-sm transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-red-400"
                    aria-label="Agrandir le logo BNI"
                  >
                    <img
                      src="/bni-logo.jpg"
                      alt="BNI Marseille"
                      className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                    />
                    <span className="whitespace-nowrap text-sm font-medium text-red-200">BNI Marseille</span>
                  </button>
                  <a
                    href="https://www.linkedin.com/in/glbonnifay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-shrink-0 items-center gap-2.5 rounded-full border border-sky-500/40 bg-gradient-to-r from-sky-500/20 to-blue-600/20 py-1.5 pl-1.5 pr-4 backdrop-blur-sm transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-sky-500">
                      <Linkedin className="h-6 w-6 text-white" />
                    </span>
                    <span className="whitespace-nowrap text-sm font-medium text-sky-200">LinkedIn</span>
                  </a>
                </div>
              </MagicCard>
            </div>
          </div>
        </div>
      </section>

      {/* --- Sitemap / accès rapide aux 9 pages --- */}
      <section className="scroll-mt-24 py-16 md:py-24 relative">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <p className="text-sm uppercase tracking-widest text-purple-400/90 font-medium">Explorez</p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Tout LG Conseil, en un coup d'œil
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PAGES.map((p) => (
              <a key={p.href} href={p.href} className="group relative block h-full">
                <MagicCard className="h-full group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-3 text-purple-300 backdrop-blur-sm border border-purple-500/20">
                        <p.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{p.title}</h3>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.description}</p>
                      <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-purple-300 group-hover:text-purple-200">
                        En savoir plus
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </MagicCard>
              </a>
            ))}
          </div>
        </div>
      </section>

      <LogoLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />

      {/* --- JSON‑LD minimal pour le SEO local --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "LG Conseil - Experts en gestion",
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Provence-Alpes-Côte d'Azur",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Marseille",
              addressCountry: "FR",
            },
            url: "https://lg-conseil.eu",
            email: ["l.garnero@expertgcl.fr", "lg-conseil@bonnifay.eu"],
            telephone: ["+33 6 22 45 92 38", "+33 6 07 83 18 18"],
            sameAs: [
              "https://www.linkedin.com/in/laurent-garnero-13016",
              "https://www.linkedin.com/in/glbonnifay",
            ],
            keywords: [
              "expert gestion Marseille",
              "conseil gestion entreprise Marseille",
              "accompagnement création entreprise Marseille",
              "pilotage entreprise Marseille",
              "redressement entreprise Marseille",
              "accompagnement dirigeant Marseille",
              "gestion trésorerie entreprise Marseille",
              "expert gestion PACA",
              "conseil gestion entreprise Provence-Alpes-Côte d'Azur",
              "accompagnement dirigeant région PACA",
            ],
          }),
        }}
      />
    </PageShell>
  );
}
