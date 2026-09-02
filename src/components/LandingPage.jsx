import React, { useEffect, useMemo, useState } from "react";
import {
  CalendarClock,
  Check,
  FileText,
  Mail,
  Phone,
  TrendingUp,
  Building2,
  Shield,
  Scale,
  ChevronDown,
  ArrowRight,
  User,
  Sparkles,
  Zap,
  Target,
  Star,
  X,
  Menu,
  Linkedin,
  Home,
  MessagesSquare,
} from "lucide-react";

// ⚙️ Remplace ces constantes par tes vraies infos
const SITE = {
  brand: "GCL – Expert en gestion",
  city: "Marseille",
  calendlyUrl: "https://app.lemcal.com/@lg-conseil",
  phone: "+33 6 22 45 92 38",
  email: "l.garnero@expertgcl.fr",
  addressHtml: "Marseille",
};

const NAV_ITEMS = [
  { href: "#missions", label: "Missions" },
  { href: "#pourquoi", label: "Pourquoi ?" },
  { href: "#ressources", label: "Ressources" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#conseils", label: "Publications" },
  { href: "#faq", label: "Faq" },
  { href: "#coordonnees", label: "Contact" },
];

const PUBLICATIONS = [
  {
    emoji: "🚗",
    title: "La voiture, l'essence et la trésorerie",
    excerpt: "Le BFR expliqué avec une métaphore simple : pourquoi même avec de bonnes ventes, votre trésorerie peut tomber en panne.",
    url: "https://www.linkedin.com/pulse/le-bfr-expliqu%C3%A9-la-voiture-lessence-et-tr%C3%A9sorerie-laurent-garnero-rupqf/",
    tag: "Trésorerie & BFR",
  },
  {
    icon: "domino",
    title: "L'effet domino d'un retard de paiement",
    excerpt: "Un simple retard peut déclencher une cascade : trésorerie tendue, relations dégradées, stress permanent.",
    url: "https://www.linkedin.com/posts/laurent-garnero-13016_gestion-pme-cashflow-activity-7376133292020019200-8faT",
    tag: "Gestion PME",
  },
  {
    emoji: "📊",
    title: "5 chiffres qui peuvent sauver votre entreprise",
    excerpt: "Les indicateurs clés à surveiller pour anticiper les difficultés et décider au bon moment.",
    url: "https://www.linkedin.com/posts/laurent-garnero-13016_5-chiffres-qui-peuvent-sauver-votre-entreprise-activity-7368538257451675648-eHcx",
    tag: "Pilotage",
  },
];

// 🎨 Palette (sobre, rassurante)
const COLORS = {
  primary: "#7c2d12", // violet-700
  primaryLight: "#9333ea", // violet-500
  accent: "#2563eb", // blue-600
  bg: "#0b1324",
  card: "#0f1a33",
  border: "#1f2a44",
};

// 🧩 Composants ultra modernes
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-violet-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-300/10 to-violet-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
  </div>
);

const AnimatedGrid = () => (
  <div className="absolute inset-0 opacity-30 pointer-events-none">
    <div className="absolute inset-0" style={{
      backgroundImage: `
        linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
      animation: 'grid-move 20s linear infinite'
    }}></div>
    <style jsx>{`
      @keyframes grid-move {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
      }
    `}</style>
  </div>
);

const GlowingCard = ({ children, className = "", glow = true }) => (
  <div className={`group relative ${className}`}>
    {glow && (
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    )}
    <div className="relative backdrop-blur-xl bg-slate-900/60 border border-slate-700/60 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-purple-500/30">
      {children}
    </div>
  </div>
);

const ShimmerButton = ({ children, className = "", innerClassName = "bg-slate-950 text-white hover:bg-slate-900", ...props }) => (
  <button
    className={`relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
    {...props}
  >
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9333ea_0%,#7c3aed_50%,#9333ea_100%)]" />
    <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-6 py-2 text-sm font-medium backdrop-blur-3xl gap-2 transition-colors ${innerClassName}`}>
      {children}
    </span>
  </button>
);

// Même style que les bannières de navigation (forme, couleur, typo)
const PillButton = ({ children, className = "", ...props }) => (
  <button
    type="button"
    className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-4 py-2 text-sm font-bold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/60 hover:from-purple-500/20 hover:to-blue-500/20 hover:text-white ${className}`}
    {...props}
  >
    {children}
  </button>
);

const MagicCard = ({ children, className = "" }) => (
  <div className={`group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
    <div className="relative p-6">
      {children}
    </div>
  </div>
);

// Icône "dominos en équilibre" dessinée à la main (les emojis domino Unicode
// ne s'affichent pas correctement sur la plupart des systèmes)
const DominoIcon = ({ className = "h-9 w-9" }) => (
  <svg viewBox="0 0 40 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="10" width="7" height="20" rx="1.6" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="1.2" />
    <circle cx="5.5" cy="16" r="1" fill="#4c1d95" />
    <circle cx="5.5" cy="24" r="1" fill="#4c1d95" />

    <g transform="rotate(16 15.5 26)">
      <rect x="12" y="6" width="7" height="20" rx="1.6" fill="#a5b4fc" stroke="#4f46e5" strokeWidth="1.2" />
      <circle cx="15.5" cy="12" r="1" fill="#312e81" />
      <circle cx="15.5" cy="20" r="1" fill="#312e81" />
    </g>

    <g transform="rotate(32 27.5 26)">
      <rect x="24" y="4" width="7" height="20" rx="1.6" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.2" />
      <circle cx="27.5" cy="10" r="1" fill="#1e3a8a" />
      <circle cx="27.5" cy="18" r="1" fill="#1e3a8a" />
    </g>
  </svg>
);

const Section = ({ id, title, kicker, children, showCta = true }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24 relative">
    <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10">
      {kicker && (
        <div className="mb-4 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-purple-400" />
          <p className="text-sm uppercase tracking-widest text-purple-400/90 font-medium">
            {kicker}
          </p>
        </div>
      )}
      {title && (
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          {title}
        </h2>
      )}
      <div className="mt-8 text-slate-300">{children}</div>
      {showCta && (
        <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
          <PillButton onClick={() => document.getElementById('rdv').scrollIntoView({ behavior: 'smooth' })}>
            <CalendarClock className="h-4 w-4" />
            Prenons rendez‑vous
          </PillButton>
          <PillButton onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            <MessagesSquare className="h-4 w-4" />
            Discutons de vos besoins
          </PillButton>
        </div>
      )}
    </div>
  </section>
);

const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/40 text-purple-200",
    premium: "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/40 text-yellow-200",
    success: "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/40 text-green-200"
  };
  
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm ${variants[variant]}`}>
      {children}
    </span>
  );
};

const Card = ({ children, className = "" }) => (
  <GlowingCard className={className}>
    {children}
  </GlowingCard>
);

const Input = ({ label, type = "text", id, required, placeholder, value, onChange }) => (
  <label className="block text-sm group">
    <span className="mb-2 block text-slate-200 font-medium">{label}</span>
    <div className="relative">
      <input
        className="w-full rounded-xl border border-slate-600/70 bg-slate-900/60 px-4 py-3 text-slate-100 outline-none backdrop-blur-sm transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 focus:bg-slate-900/80 hover:border-slate-500/80"
        type={type}
        id={id}
        placeholder={placeholder}
        aria-label={label}
        required={required}
        value={value}
        onChange={onChange}
      />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  </label>
);

const Textarea = ({ label, id, required, placeholder, value, onChange }) => (
  <label className="block text-sm group">
    <span className="mb-2 block text-slate-200 font-medium">{label}</span>
    <div className="relative">
      <textarea
        className="min-h-[120px] w-full rounded-xl border border-slate-600/70 bg-slate-900/60 px-4 py-3 text-slate-100 outline-none backdrop-blur-sm transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 focus:bg-slate-900/80 hover:border-slate-500/80 resize-none"
        id={id}
        placeholder={placeholder}
        aria-label={label}
        required={required}
        value={value}
        onChange={onChange}
      />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  </label>
);

const Accordion = ({ items }) => {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-4">
      {items.map((it, idx) => (
        <MagicCard key={idx} className="overflow-hidden">
          <button
            className="group w-full text-left"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
          >
            <div className="flex items-center justify-between gap-6 p-6">
              <p className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">{it.q}</p>
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ChevronDown
                  className={`relative h-5 w-5 flex-shrink-0 transition-all duration-300 text-purple-400 ${
                    open === idx ? "rotate-180 scale-110" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`grid transition-all duration-500 ease-out ${
                open === idx ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr] pb-0"
              }`}
            >
              <div className="overflow-hidden px-6">
                <div className="pt-2 pb-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-4"></div>
                  <p className="text-slate-300 leading-relaxed">{it.a}</p>
                </div>
              </div>
            </div>
          </button>
        </MagicCard>
      ))}
    </div>
  );
};

const CookieBar = () => {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    setSeen(localStorage.getItem("consent") === "given");
  }, []);
  if (seen) return null;
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 mx-auto w-[95%] rounded-2xl border border-slate-700/70 bg-slate-900/90 p-4 text-sm text-slate-200 shadow-2xl md:max-w-3xl">
      <div className="flex items-start gap-4">
        <Shield className="mt-1 h-5 w-5" />
        <p>
          Nous utilisons des cookies strictement nécessaires et, avec votre accord, des mesures d'audience.
          <a href="/confidentialite" className="ml-2 underline">En savoir plus</a>.
        </p>
      </div>
      <div className="mt-3 flex justify-end gap-2">
        <button
          className="rounded-xl border border-slate-600 px-3 py-2 hover:bg-slate-800"
          onClick={() => {
            localStorage.setItem("consent", "denied");
            setSeen(true);
          }}
        >
          Refuser
        </button>
        <button
          className="rounded-xl bg-purple-600 px-3 py-2 font-medium text-white hover:bg-purple-500"
          onClick={() => {
            localStorage.setItem("consent", "given");
            setSeen(true);
          }}
        >
          Accepter
        </button>
      </div>
    </div>
  );
};

const RESOURCES = [
  {
    title: "20 points de contrôle avant de créer sa société",
    description: "Le guide indispensable pour préparer votre projet et sécuriser le lancement.",
    file: "/ressources/20-points-de-controle-avant-de-creer-sa-societe.pdf",
    icon: FileText,
    tag: "Création",
  },
  {
    title: "Votre entreprise est-elle aussi rentable qu'elle devrait l'être ?",
    description: "10 points de contrôle pour évaluer la rentabilité réelle de votre activité.",
    file: "/ressources/votre-entreprise-est-elle-rentable.pdf",
    icon: TrendingUp,
    tag: "Pilotage",
  },
  {
    title: "Entreprise en difficulté : les signaux à surveiller",
    description: "10 points de vigilance pour agir avant qu'il ne soit trop tard.",
    file: "/ressources/entreprise-en-difficulte.pdf",
    icon: Shield,
    tag: "Redressement",
  },
  {
    title: "Êtes-vous prêt à vendre votre entreprise ?",
    description: "10 points de contrôle avant de céder votre activité dans les meilleures conditions.",
    file: "/ressources/cession-vente-entreprise.pdf",
    icon: Scale,
    tag: "Cession",
  },
];

const LeadMagnet = () => (
  <a
    href={RESOURCES[0].file}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-purple-200 hover:bg-purple-500/20"
  >
    <FileText className="h-4 w-4" /> Télécharger la check‑list gratuite
  </a>
);

const ServiceCard = ({ icon: Icon, title, bullets, delay = 0 }) => (
  <MagicCard className={`group hover:scale-105 transition-all duration-500 animate-fade-in-up`} style={{ animationDelay: `${delay}ms` }}>
    <div className="flex items-start gap-4">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-3 text-purple-300 backdrop-blur-sm border border-purple-500/20">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{title}</h3>
        <ul className="mt-4 space-y-3 text-slate-300">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 group/item">
              <div className="relative mt-1">
                <div className="absolute inset-0 bg-purple-400/30 rounded-full blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                <Check className="relative h-4 w-4 flex-shrink-0 text-purple-400" />
              </div>
              <span className="group-hover/item:text-slate-200 transition-colors duration-300">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </MagicCard>
);

const LogoLightbox = ({ image, onClose }) => {
  useEffect(() => {
    if (!image) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <div className="relative w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute -top-4 -right-4 rounded-full border border-slate-600/60 bg-slate-900 p-2 text-slate-200 shadow-lg hover:bg-slate-800"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 shadow-2xl">
          <img src={image.src} alt={image.alt} className="h-auto w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default function LandingPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", sector: "", message: "", consent: false });
  const [status, setStatus] = useState("idle");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  const faq = useMemo(
    () => [
      {
        q: "Qu'est-ce qu'un expert en gestion d'entreprise à Marseille ?",
        a: "Un partenaire opérationnel qui vous aide à structurer, piloter et sécuriser votre entreprise : vision, rentabilité, trésorerie, financements, et organisation au quotidien. Conseil gestion entreprise spécialisé TPE/PME.",
      },
      {
        q: "Combien coûte l'accompagnement création entreprise ?",
        a: "Après un diagnostic gratuit, un devis clair au forfait ou à l'abonnement mensuel selon la mission. L'objectif est un ROI mesurable pour votre pilotage entreprise.",
      },
      {
        q: "Travaillez-vous avec mon expert-comptable à Marseille ?",
        a: "Oui. L'expert en gestion complète le comptable : nous transformons les chiffres en décisions et en plan d'action pour votre redressement entreprise.",
      },
      {
        q: "Accompagnement dirigeant possible à distance ?",
        a: "Oui, en combinant visio, tableau de bord partagé et points réguliers. Déplacements possibles à Marseille et alentours pour le conseil gestion entreprise.",
      },
    ],
    []
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // 👉 Branchez ici votre API Node/Express (/api/contact) avec Nodemailer + hCaptcha/Turnstile
      // const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      // if (!res.ok) throw new Error("Erreur serveur");
      await new Promise((r) => setTimeout(r, 600)); // démo
      setStatus("success");
      setForm({ name: "", email: "", phone: "", sector: "", message: "", consent: false });
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative">
      {/* Background Effects */}
      <FloatingOrbs />
      <AnimatedGrid />
      
      {/* --- Top bar --- */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1800px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <div className="flex flex-shrink-0 items-center gap-2">
            <div className="relative leading-tight">
              <div className="whitespace-nowrap text-[26px] sm:text-[34px] lg:text-[60px] font-extrabold tracking-tight text-white">LG Conseil</div>
              <div className="whitespace-nowrap text-[14px] sm:text-[18px] lg:text-[32px] font-bold tracking-wide text-[#e2583f]">
                Experts en gestion
              </div>
            </div>
          </div>
          <nav className="hidden flex-wrap items-center justify-end gap-2.5 min-[1024px]:flex">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Retour en haut de la page"
              className="flex-shrink-0 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-2.5 text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/60 hover:from-purple-500/20 hover:to-blue-500/20 hover:text-white"
            >
              <Home className="h-4 w-4" />
            </button>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-4 py-2 text-sm font-bold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/60 hover:from-purple-500/20 hover:to-blue-500/20 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
            className="flex-shrink-0 rounded-lg border border-slate-700/60 bg-slate-900/60 p-2.5 text-slate-200 hover:bg-slate-800/60 hover:text-white transition-colors min-[1024px]:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-800/60 bg-slate-950/95 backdrop-blur-xl min-[1024px]:hidden">
            <nav className="mx-auto flex max-w-[1800px] flex-wrap gap-2 px-4 py-4 sm:px-6 lg:px-10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                aria-label="Retour en haut de la page"
                className="flex-shrink-0 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-2.5 text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/60 hover:from-purple-500/20 hover:to-blue-500/20 hover:text-white"
              >
                <Home className="h-4 w-4" />
              </button>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="whitespace-nowrap rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-4 py-2 text-sm font-bold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/60 hover:from-purple-500/20 hover:to-blue-500/20 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

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

              <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
                <PillButton onClick={() => document.getElementById('rdv').scrollIntoView({ behavior: 'smooth' })}>
                  <CalendarClock className="h-5 w-5" />
                  Prenons rendez‑vous
                </PillButton>

                <PillButton onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                  <MessagesSquare className="h-5 w-5" />
                  Discutons de vos besoins
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

                <p className="text-slate-300 leading-relaxed mb-4">
                  10+ ans d'expérience en pilotage d'entreprise (création, croissance, redressement). Mon rôle : transformer
                  des chiffres en décisions et des décisions en résultats.
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

      {/* --- Services --- */}
      <Section id="missions" kicker="Nos missions" title="Pilotage & accompagnement création, reprise, cession et transmission">
        <div className="grid gap-8 md:grid-cols-3">
          <ServiceCard
            icon={TrendingUp}
            title="Pilotage"
            delay={0}
            bullets={[
              "Tableau de bord, marges et prix",
              "Trésorerie, BFR et plans d'action",
              "Restructuration, priorités et accompagnement terrain",
            ]}
          />
          <ServiceCard
            icon={FileText}
            title="Création & reprise"
            delay={200}
            bullets={[
              "Business plan et prévisionnels crédibles",
              "Choix de structure et cadrage juridique",
              "Financements, aides et premiers indicateurs",
            ]}
          />
          <ServiceCard
            icon={Scale}
            title="Cession & Transmission"
            delay={400}
            bullets={[
              "Préparation à la vente et audit vendeur",
              "Dataroom, KPI et récit de performance",
              "Négociation et accompagnement jusqu'à la signature",
            ]}
          />
        </div>
      </Section>

      {/* --- Pourquoi --- */}
      <Section id="pourquoi" kicker="Pourquoi un expert en gestion ?" title="Un métier mal connu, une valeur très concrète">
        <div className="grid items-start gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Card>
              <h3 className="text-lg font-semibold text-white">De la donnée ➜ à la décision</h3>
              <p className="mt-2 text-slate-300">
                Nous transformons les chiffres en plan d'action : marges, trésorerie, priorités, responsabilité.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-white">Moins de stress, plus de visibilité</h3>
              <p className="mt-2 text-slate-300">
                Tableau de bord clair, rituels de pilotage et scénarios réalistes pour prendre les bonnes décisions.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-white">Un retour sur investissement mesurable</h3>
              <p className="mt-2 text-slate-300">
                Objectifs chiffrés, gains identifiés, suivi simple. On parle résultats.
              </p>
            </Card>
          </div>
          <Card>
            <h3 className="text-lg font-semibold text-white">Comment ça se passe ?</h3>
            <ol className="mt-4 space-y-3 text-slate-300">
              {[
                "Appel de découverte (15–20 min)",
                "Diagnostic offert (1h) : objectifs, chiffres clés, priorités",
                "Proposition claire (forfait/abonnement)",
                "Déploiement et suivi (tableau de bord + points réguliers)",
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-[2px] inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600/30 text-sm font-semibold text-purple-200">
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6">
              <LeadMagnet />
            </div>
          </Card>
        </div>
      </Section>

      {/* --- Ressources --- */}
      <Section id="ressources" kicker="Ressources gratuites" title="Téléchargez nos guides pratiques">
        <p className="mb-8 max-w-3xl text-slate-300">
          Quatre guides courts et opérationnels pour faire un premier état des lieux de votre projet ou de votre entreprise.
          <span className="text-purple-300"> Sans inscription.</span>
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {RESOURCES.map((r, idx) => (
            <a
              key={idx}
              href={r.file}
              target="_blank"
              rel="noreferrer"
              className="group relative block"
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
            </a>
          ))}
        </div>
      </Section>

      {/* --- Réservation --- */}
      <Section id="rdv" kicker="Prenons rendez‑vous" title="Réservez un appel découverte" showCta={false}>
        <Card>
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-slate-200">
                Choisissez un créneau directement dans mon agenda. L'appel permet de comprendre vos enjeux et de vous
                donner une première feuille de route.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" /> 30 minutes en visio</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" /> Diagnostic gratuit et sans engagement</li>
                <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" /> Confirmation immédiate par email</li>
              </ul>
            </div>
            <a
              href={SITE.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-4 text-base font-medium text-white hover:bg-purple-500"
            >
              <CalendarClock className="h-5 w-5" /> Réserver mon créneau
            </a>
          </div>
        </Card>

        <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
          <PillButton onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            <MessagesSquare className="h-4 w-4" />
            Discutons de vos besoins
          </PillButton>
        </div>
      </Section>

      {/* --- Social Proof --- */}
      <Section id="temoignages" kicker="Témoignages" title="Ce que disent nos clients" showCta={false}>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Témoignage 1 */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full backdrop-blur-xl bg-slate-900/60 border border-slate-700/60 rounded-2xl p-8 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-slate-300 leading-relaxed italic text-base">
                  « Travailler avec Laurent a vraiment marqué un tournant pour moi. Dès nos premiers échanges, il a su cerner mes besoins et m'apporter une vraie clarté sur mes tarifs, mon positionnement et mes objectifs financiers. Son accompagnement, à la fois structuré et très adapté à ma situation, m'a permis de gagner en confiance et de savoir comment attirer mes premiers clients tout en valorisant mon travail.
                  <br /><br />
                  Au-delà de son expertise, c'est quelqu'un de très agréable et sympathique : chaque séance est motivante et rassurante. On repart toujours avec des idées concrètes, un plan clair et surtout l'envie d'agir. Je recommande sincèrement son accompagnement à tous ceux qui veulent développer leur activité avec sérénité et efficacité. »
                </blockquote>
              </div>
              <div className="mt-6 flex items-center gap-4 border-t border-slate-700/50 pt-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/40 to-blue-600/40 flex items-center justify-center border border-purple-500/30">
                  <User className="h-6 w-6 text-purple-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">Soisick DE CANECAUDE</p>
                  <p className="text-sm text-purple-300">Studio SoaZ · Architecte d'intérieur</p>
                  <a
                    href="https://www.studiosoaz.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-purple-300 transition-colors hover:underline"
                  >
                    www.studiosoaz.fr
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Témoignage 2 */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full backdrop-blur-xl bg-slate-900/60 border border-slate-700/60 rounded-2xl p-8 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-slate-300 leading-relaxed italic text-base">
                  « L'accompagnement de Laurent est un vrai atout pour notre coopérative. Avec optimisme et clairvoyance, il nous aide à prendre du recul, à mieux organiser nos actions et à avancer plus sereinement. De plus, son écoute et ses mises en relation avec d'autres partenaires enrichissent notre démarche et ouvrent de nouvelles perspectives pour l'avenir. »
                </blockquote>
              </div>
              <div className="mt-6 flex items-center gap-4 border-t border-slate-700/50 pt-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/40 to-blue-600/40 flex items-center justify-center border border-purple-500/30">
                  <User className="h-6 w-6 text-purple-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">Julie</p>
                  <p className="text-sm text-purple-300">Directrice de coopérative · Marseille</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
          <PillButton onClick={() => document.getElementById('rdv').scrollIntoView({ behavior: 'smooth' })}>
            <CalendarClock className="h-4 w-4" />
            Prenons rendez‑vous
          </PillButton>
          <PillButton onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            <MessagesSquare className="h-4 w-4" />
            Discutons de vos besoins
          </PillButton>
        </div>
      </Section>

      {/* --- FAQ --- */}
      <Section id="faq" kicker="Foire aux questions" title="Tout ce que vous voulez savoir">
        <Accordion items={faq} />
      </Section>

      {/* --- Contact --- */}
      <Section id="contact" kicker="Discutons de vos besoins" showCta={false}>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <form className="space-y-4" onSubmit={onSubmit}>
              <Input
                label="Nom"
                required
                placeholder="Prénom Nom"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="Email"
                  type="email"
                  required
                  placeholder="vous@domaine.fr"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <Input
                  label="Téléphone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <Input
                label="Secteur d'activité"
                placeholder="Ex : restauration, BTP, services…"
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

              <div className="mt-2 text-xs text-slate-400">Protection anti‑spam proposée : Cloudflare Turnstile / hCaptcha (à brancher).</div>

              <button
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-medium text-white hover:bg-purple-500 disabled:opacity-60"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Envoi…" : "Envoyer le message"}
              </button>

              {status === "success" && (
                <p className="rounded-xl border border-purple-700/40 bg-purple-700/10 p-3 text-purple-200">
                  Merci ! Votre message a bien été envoyé. Je vous réponds rapidement.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-xl border border-red-700/40 bg-red-700/10 p-3 text-red-200">
                  Oups, une erreur est survenue. Réessayez plus tard ou contactez‑moi par téléphone.
                </p>
              )}
            </form>
          </Card>

          <div className="space-y-4">
            <Card>
              <h3 className="text-lg font-semibold text-white">Ils me font confiance</h3>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Architectes d'intérieur, dirigeants de coopératives, TPE/PME… Retrouvez l'ensemble des témoignages dans la{" "}
                <a href="#temoignages" className="text-purple-300 hover:underline">section témoignages</a>.
              </p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-slate-400">Satisfaction client</span>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
          <PillButton onClick={() => document.getElementById('rdv').scrollIntoView({ behavior: 'smooth' })}>
            <CalendarClock className="h-4 w-4" />
            Prenons rendez‑vous
          </PillButton>
        </div>
      </Section>

      {/* --- Conseils / LinkedIn + Footer : min-h-screen pour garantir assez d'espace de défilement afin que
           l'ancre #conseils puisse s'aligner sous l'en-tête fixe, même sur les grands écrans (dernière section) --- */}
      <div className="min-h-screen">
      <Section id="conseils" kicker="Publications" title="Laurent">
        <div className="grid gap-6 md:grid-cols-3">
          {PUBLICATIONS.map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full backdrop-blur-xl bg-slate-900/60 border border-slate-700/60 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 group-hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-start justify-between gap-3">
                  {article.icon === "domino" ? (
                    <DominoIcon className="h-8 w-8" />
                  ) : (
                    <span className="text-3xl">{article.emoji}</span>
                  )}
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                    <svg className="h-3 w-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    {article.tag}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{article.excerpt}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                  Lire sur LinkedIn
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/laurent-garnero-13016"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-blue-500/40 bg-blue-500/10 px-5 py-3 text-sm font-medium text-blue-300 hover:bg-blue-500/20 transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Voir toutes les publications de Laurent
          </a>
        </div>
      </Section>

      {/* --- Contact (coordonnées) --- */}
      <Section id="coordonnees" kicker="Contact" title="Nos coordonnées">
        <div className="grid gap-8 md:grid-cols-2 md:gap-14 max-w-4xl mx-auto">
          <Card>
            <h3 className="text-lg font-semibold text-white">Laurent Garnero</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-purple-400" /> {SITE.phone}</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-purple-400" /> {SITE.email}</li>
              <li className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-purple-400" />
                <span dangerouslySetInnerHTML={{ __html: SITE.addressHtml }} />
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="https://linkedin.com/in/laurent-garnero-13016" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-white">Georges-Louis Bonnifay</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-purple-400" /> +33 6 07 83 18 18</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-purple-400" /> lg-conseil@bonnifay.eu</li>
              <li className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-purple-400" />
                <span>Marseille</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="https://www.linkedin.com/in/glbonnifay" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* --- Footer / Mentions --- */}
      <footer id="mentions" className="border-t border-slate-800/60 py-12">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} {SITE.brand}. Tous droits réservés — Marseille.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                <a href="/mentions-legales" className="hover:text-slate-300 hover:underline">Mentions légales</a>
                {" · "}
                <a href="/confidentialite" className="hover:text-slate-300 hover:underline">Politique de confidentialité</a>
                {" · "}
                <a href="/confidentialite" className="hover:text-slate-300 hover:underline">RGPD</a> (bannières cookies, finalités, durée et droits d'accès).
              </p>
            </div>
            <div className="text-sm text-slate-400">
              <p>Ce site n'utilise des traceurs qu'avec votre consentement. Analytics recommandé : Matomo/Umami auto‑hébergé.</p>
            </div>
          </div>
        </div>
      </footer>
      </div>

      <CookieBar />

      <LogoLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />

      {/* --- JSON‑LD minimal pour le SEO local --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: `${SITE.brand}`,
            areaServed: "Marseille",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Marseille",
              addressCountry: "FR",
            },
            url: typeof window !== "undefined" ? window.location.href : "",
            email: SITE.email,
            telephone: SITE.phone,
            sameAs: [],
          }),
        }}
      />
    </div>
  );
}

