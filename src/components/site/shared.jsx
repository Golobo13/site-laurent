import React, { useEffect, useState } from "react";
import {
  CalendarClock,
  Check,
  FileText,
  TrendingUp,
  Scale,
  Shield,
  ChevronDown,
  Sparkles,
  X,
  AlertTriangle,
  MessagesSquare,
} from "lucide-react";

// ⚙️ Remplace ces constantes par tes vraies infos
export const SITE = {
  brand: "LG Conseil - Experts en gestion",
  city: "Marseille",
  calendlyUrl: "https://app.lemcal.com/@lg-conseil",
  phone: "+33 6 22 45 92 38",
  email: "l.garnero@expertgcl.fr",
  addressHtml: "Marseille",
};

// Navigation principale, commune à toutes les pages
export const NAV_ITEMS = [
  { href: "/missions", label: "Missions" },
  { href: "/pourquoi-un-expert", label: "Pourquoi ?" },
  { href: "/guides-pratiques", label: "Guides pratiques" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/publications", label: "Publications" },
  { href: "/faq", label: "Faq" },
  { href: "/coordonnees", label: "Contact" },
];

export const PUBLICATIONS = [
  {
    emoji: "🚗",
    title: "La voiture, l'essence et la trésorerie",
    excerpt: "Le BFR expliqué avec une métaphore simple : pourquoi même avec de bonnes ventes, votre trésorerie peut tomber en panne.",
    url: "https://www.linkedin.com/pulse/le-bfr-expliqu%C3%A9-la-voiture-lessence-et-tr%C3%A9sorerie-laurent-garnero-rupqf/",
    tag: "Trésorerie & BFR",
    byline: "Laurent GARNERO — Consultant en gestion, création et reprise d'entreprise",
    date: "18 septembre 2025",
    body: [
      { type: "paragraph", text: "Imagine que ton entreprise est une voiture. Pas n'importe laquelle : une voiture qui doit parcourir un long trajet pour atteindre sa destination. Le trajet, c'est ton projet, ton développement, tes ventes à venir." },
      { type: "paragraph", text: "Pour réussir ce trajet, il te faut de l'essence. Et dans ton entreprise, cette essence s'appelle… le BFR, ou Besoin en Fonds de Roulement." },
      { type: "heading", text: "1️⃣ La voiture et le réservoir : ton entreprise et ton cash" },
      { type: "paragraph", text: "Ton réservoir d'essence correspond à l'argent disponible sur ton compte : ta trésorerie." },
      { type: "list", items: [
        "Trop peu d'essence ? Tu risques de t'arrêter en plein milieu du trajet.",
        "Trop d'essence ? Ce n'est pas un problème immédiat, mais cela signifie que tu as immobilisé de l'argent qui pourrait être investi ailleurs.",
      ] },
      { type: "paragraph", text: "Le BFR te permet de savoir combien d'essence tu dois avoir pour rouler sans stress." },
      { type: "heading", text: "2️⃣ Combien d'essence mettre pour atteindre sa destination ?" },
      { type: "paragraph", text: "Avant de partir, tu dois connaître trois choses :" },
      { type: "list", ordered: true, items: [
        "La distance totale à parcourir – combien de jours ou semaines tes clients mettent pour te payer ?",
        "Ta consommation d'essence par kilomètre – combien d'argent tu dois avancer pour payer tes fournisseurs, ton stock, tes charges ?",
        "Les stations-service sur la route – est-ce que tu as des entrées d'argent qui vont « remplir ton réservoir » avant qu'il ne soit vide ?",
      ] },
      { type: "paragraph", text: "Si tu ne fais pas ce calcul, tu risques de tomber en panne au milieu du trajet, même si tes ventes sont bonnes. Et c'est exactement ce qui arrive quand la trésorerie est tendue malgré un chiffre d'affaires en croissance." },
      { type: "heading", text: "3️⃣ Les trois éléments du BFR" },
      { type: "paragraph", text: "Pour prolonger notre métaphore, ton BFR est composé de trois « réservoirs secondaires » :" },
      { type: "list", items: [
        "Les stocks : c'est comme le poids de la voiture. Plus elle est chargée, plus elle consomme d'essence. Si tu achètes beaucoup de produits avant de les vendre, ton BFR augmente.",
        "Les clients : ce sont les kilomètres à parcourir sans trouver de station-service. Les factures non réglées immobilisent ton argent et te font avancer avec un réservoir vide.",
        "Les fournisseurs : ce sont les stations-service où tu dois payer pour continuer à rouler. Plus ils demandent un paiement rapide, plus tu dois avancer de l'argent rapidement.",
      ] },
      { type: "heading", text: "4️⃣ Comment gérer son BFR ?" },
      { type: "paragraph", text: "Pour que ton trajet se passe bien, tu peux agir sur trois leviers :" },
      { type: "list", items: [
        "Réduire la distance entre les stations-service : facturer plus vite et relancer tes clients pour encaisser plus tôt.",
        "Alléger la voiture : gérer tes stocks intelligemment pour ne pas immobiliser trop d'argent.",
        "Négocier tes arrêts chez les fournisseurs : obtenir des délais de paiement plus longs, comme si les stations-service acceptaient de te laisser rouler avant de payer.",
      ] },
      { type: "heading", text: "5️⃣ La morale de l'histoire" },
      { type: "paragraph", text: "Même avec une voiture puissante (un chiffre d'affaires élevé), si ton réservoir est mal rempli ou mal anticipé, tu risques de t'arrêter avant d'atteindre ton objectif." },
      { type: "paragraph", text: "Le BFR, c'est exactement ça : il te permet de savoir combien d'argent tu dois avoir, quand et où, pour que ton entreprise avance sans à-coups et avec sérénité." },
      { type: "quote", text: "💡 Astuce d'expert : un BFR bien géré transforme une entreprise « stressée » en entreprise « sereine ». Et c'est souvent cette sérénité qui permet de prendre de meilleures décisions, investir au bon moment et saisir des opportunités." },
      { type: "heading", text: "✅ Conclusion" },
      { type: "paragraph", text: "Le BFR n'est pas un outil réservé aux comptables ou aux banquiers. C'est ta boussole pour piloter ton entreprise. Comme un conducteur qui connaît son réservoir et ses stations, tu avances plus loin, plus vite et surtout… sans tomber en panne !" },
    ],
  },
  {
    icon: "domino",
    title: "L'effet domino d'un retard de paiement",
    excerpt: "Un simple retard peut déclencher une cascade : trésorerie tendue, relations dégradées, stress permanent.",
    url: "https://www.linkedin.com/posts/laurent-garnero-13016_gestion-pme-cashflow-activity-7376133292020019200-8faT",
    tag: "Gestion PME",
    body: [
      { type: "paragraph", text: "Un simple retard de paiement, ça peut paraître anodin." },
      { type: "paragraph", text: "Mais dans une petite entreprise, c'est souvent l'effet domino :" },
      { type: "list", items: [
        "💸 Le client paie en retard,",
        "➡️ La trésorerie se tend,",
        "➡️ Le dirigeant repousse certains règlements,",
        "➡️ La relation avec les fournisseurs se dégrade,",
        "➡️ Et la spirale du stress commence…",
      ] },
      { type: "paragraph", text: "La bonne nouvelle, c'est qu'il existe des solutions pour casser ce cercle vicieux :" },
      { type: "list", items: [
        "✔️ Anticiper les flux avec un plan de trésorerie,",
        "✔️ Mettre en place des acomptes,",
        "✔️ Sécuriser ses délais de paiement dès le devis.",
      ] },
      { type: "quote", text: "👉 Et vous, avez-vous déjà vécu cet « effet domino » dans votre entreprise ?" },
    ],
  },
  {
    emoji: "📊",
    title: "5 chiffres qui peuvent sauver votre entreprise",
    excerpt: "Les indicateurs clés à surveiller pour anticiper les difficultés et décider au bon moment.",
    url: "https://www.linkedin.com/posts/laurent-garnero-13016_5-chiffres-qui-peuvent-sauver-votre-entreprise-activity-7368538257451675648-eHcx",
    tag: "Pilotage",
    images: [
      { src: "/images/publications/indicateurs-cover.jpg", alt: "5 Astuces : comment savoir rapidement si mon entreprise est sur la bonne voie ?" },
      { src: "/images/publications/indicateurs-astuce-1.jpg", alt: "Astuce 1 — Votre trésorerie disponible" },
      { src: "/images/publications/indicateurs-astuce-3.jpg", alt: "Astuce 3 — La marge brute" },
      { src: "/images/publications/indicateurs-astuce-4.jpg", alt: "Astuce 4 — Niveau d'endettement" },
      { src: "/images/publications/indicateurs-astuce-5.jpg", alt: "Astuce 5 — Carnet de commandes" },
    ],
  },
];

export const RESOURCES = [
  {
    slug: "20-points-controle-creation",
    title: "Vous allez créer votre entreprise",
    description: "20 points de contrôle pour préparer votre projet et sécuriser le lancement.",
    file: "/ressources/20-points-de-controle-avant-de-creer-sa-societe.pdf",
    icon: FileText,
    tag: "Création",
  },
  {
    slug: "rentabilite",
    title: "Votre entreprise est-elle aussi rentable qu'elle devrait l'être ?",
    description: "10 points de contrôle pour évaluer la rentabilité réelle de votre activité.",
    file: "/ressources/votre-entreprise-est-elle-rentable.pdf",
    icon: TrendingUp,
    tag: "Pilotage",
  },
  {
    slug: "difficulte",
    title: "Entreprise en difficulté : les signaux à surveiller",
    description: "10 points de vigilance pour agir avant qu'il ne soit trop tard.",
    file: "/ressources/entreprise-en-difficulte.pdf",
    icon: Shield,
    tag: "Redressement",
  },
  {
    slug: "cession",
    title: "Êtes-vous prêt à vendre votre entreprise ?",
    description: "10 points de contrôle avant de céder votre activité dans les meilleures conditions.",
    file: "/ressources/cession-vente-entreprise.pdf",
    icon: Scale,
    tag: "Cession",
  },
];

// 🧩 Composants ultra modernes
export const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-violet-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-300/10 to-violet-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
  </div>
);

export const AnimatedGrid = () => (
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

export const GlowingCard = ({ children, className = "", glow = true }) => (
  <div className={`group relative ${className}`}>
    {glow && (
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    )}
    <div className="relative backdrop-blur-xl bg-slate-900/60 border border-slate-700/60 rounded-2xl p-6 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-purple-500/30">
      {children}
    </div>
  </div>
);

export const ShimmerButton = ({ children, className = "", innerClassName = "bg-slate-950 text-white hover:bg-slate-900", ...props }) => (
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

// Même style que les bannières de navigation (forme, couleur, typo).
// Si `href` est fourni, s'affiche comme un vrai lien (navigation inter-pages) ;
// sinon comme un bouton (comportement onClick classique).
export const PillButton = ({ children, className = "", href, ...props }) => {
  const cls = `inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-4 py-2 text-sm font-bold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/60 hover:from-purple-500/20 hover:to-blue-500/20 hover:text-white ${className}`;
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
};

export const MagicCard = ({ children, className = "" }) => (
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
export const DominoIcon = ({ className = "h-9 w-9" }) => (
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

// Section générique utilisée par toutes les pages.
// showCta ajoute les deux boutons d'appel à l'action qui renvoient vers les
// vraies pages /rendez-vous et /contact (avant : ancre sur la même page).
export const Section = ({ id, title, kicker, children, showCta = true }) => (
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
        <div className="mt-10 flex flex-col items-stretch gap-4">
          <PillButton href="/rendez-vous" className="self-start justify-start">
            <CalendarClock className="h-4 w-4 flex-shrink-0" />
            <span className="text-justify leading-tight">
              Réservez un appel<br />
              découverte <span className="animate-pulse text-[#e2583f]">gratuit</span>
            </span>
          </PillButton>
          <PillButton href="/contact" className="self-start justify-start">
            <MessagesSquare className="h-4 w-4 flex-shrink-0" />
            <span className="text-justify leading-tight">
              Parlez-nous de vous,<br />
              on vous recontacte <span className="animate-pulse text-[#e2583f]">vite</span>
            </span>
          </PillButton>
        </div>
      )}
    </div>
  </section>
);

export const Badge = ({ children, variant = "default" }) => {
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

export const Card = ({ children, className = "" }) => (
  <GlowingCard className={className}>
    {children}
  </GlowingCard>
);

export const Input = ({ label, type = "text", id, required, placeholder, value, onChange, onBlur, error, autoFocus, blink, inputMode, pattern }) => (
  <label className="block text-sm group">
    <span className="mb-2 block text-slate-200 font-medium">
      {label}
      {required && <span className="ml-0.5 text-red-500">*</span>}
    </span>
    <div className="relative">
      <input
        className={`w-full rounded-xl border px-4 py-3 text-slate-100 outline-none backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-purple-500/30 focus:bg-slate-900/80 hover:border-slate-500/80 ${
          blink
            ? "field-error-blink border-yellow-400"
            : error
            ? "border-red-500/70 bg-slate-900/60 focus:border-red-500"
            : "border-slate-600/70 bg-slate-900/60 focus:border-purple-500"
        }`}
        type={type}
        id={id}
        placeholder={placeholder}
        aria-label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={error || blink ? "true" : undefined}
        autoFocus={autoFocus}
        inputMode={inputMode}
        pattern={pattern}
      />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
    {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
  </label>
);

export const Select = ({ label, id, required, value, onChange, options, placeholder }) => (
  <label className="block text-sm group">
    <span className="mb-2 block text-slate-200 font-medium">{label}</span>
    <div className="relative">
      <select
        className="w-full appearance-none rounded-xl border border-slate-600/70 bg-slate-900/60 px-4 py-3 pr-10 text-slate-100 outline-none backdrop-blur-sm transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 focus:bg-slate-900/80 hover:border-slate-500/80"
        id={id}
        aria-label={label}
        required={required}
        value={value}
        onChange={onChange}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  </label>
);

export const Textarea = ({ label, id, required, placeholder, value, onChange }) => (
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

export const Accordion = ({ items }) => {
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

export const ServiceCard = ({ icon: Icon, title, bullets, delay = 0 }) => (
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

export const LogoLightbox = ({ image, onClose }) => {
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

export const RequiredFieldsModal = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

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
        <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 p-8 text-center shadow-2xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-400">
            <AlertTriangle className="h-7 w-7" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-white">Saisie obligatoire</h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Merci de renseigner tous les champs marqués d'un astérisque rouge (*) avant d'envoyer votre message.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-medium text-white hover:bg-purple-500"
          >
            J'ai compris
          </button>
        </div>
      </div>
    </div>
  );
};

export const DownloadModal = ({
  resource,
  form,
  setForm,
  status,
  fieldErrors,
  setFieldErrors,
  emailError,
  setEmailError,
  onSubmit,
  onClose,
}) => {
  useEffect(() => {
    if (!resource) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [resource, onClose]);

  if (!resource) return null;

  const Icon = resource.icon;
  // Pour le guide "Vous allez créer votre entreprise" : le prénom, le téléphone
  // et la raison sociale ne sont pas obligatoires (l'entreprise n'est pas encore créée).
  const isPreCreation = resource.slug === "20-points-controle-creation";

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/80 p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative mx-auto my-8 w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute -top-4 -right-4 z-10 rounded-full border border-slate-600/60 bg-slate-900 p-2 text-slate-200 shadow-lg hover:bg-slate-800"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 p-8 shadow-2xl">
          <div className="mb-6 flex items-start gap-3">
            <div className="flex-shrink-0 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-3 text-purple-300">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-purple-400/90">Téléchargement gratuit</p>
              <h3 className="mt-1 text-lg font-semibold leading-snug text-white">{resource.title}</h3>
            </div>
          </div>

          {status === "success" ? (
            <div className="py-2 text-center">
              <p className="success-pulse-strong rounded-xl border border-purple-700/40 bg-purple-700/10 p-4 font-medium text-purple-100">
                Merci ! Votre guide vient de partir par email{form.email ? ` à ${form.email}` : ""}. Pensez à vérifier vos spams si vous ne le voyez pas d'ici quelques minutes.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-medium text-white hover:bg-purple-500"
              >
                Fermer
              </button>
            </div>
          ) : (
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
                  required={!isPreCreation}
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
                  onBlur={() => {
                    if (!form.email) {
                      setEmailError("");
                      return;
                    }
                    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
                    setEmailError(ok ? "" : "Adresse email invalide (ex : vous@domaine.fr).");
                  }}
                  error={emailError}
                />
                <Input
                  label="Téléphone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  required={!isPreCreation}
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
                  required={!isPreCreation}
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
                {status === "loading" ? "Envoi…" : "Recevoir le guide par email"}
              </button>

              {status === "error" && (
                <p className="rounded-xl border border-red-700/40 bg-red-700/10 p-3 text-red-200">
                  Oups, une erreur est survenue. Réessayez plus tard ou contactez‑nous par téléphone.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export const PublicationModal = ({ article, onClose }) => {
  useEffect(() => {
    if (!article) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div className="relative mx-auto my-6 w-full max-w-2xl sm:my-10" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute -top-4 -right-4 z-10 rounded-full border border-slate-600/60 bg-slate-900 p-2 text-slate-200 shadow-lg hover:bg-slate-800"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 shadow-2xl">
          <div className="border-b border-slate-700/60 p-6 sm:p-8">
            <div className="flex items-start justify-between gap-3">
              {article.icon === "domino" ? (
                <DominoIcon className="h-9 w-9" />
              ) : (
                <span className="text-3xl">{article.emoji}</span>
              )}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                {article.tag}
              </span>
            </div>
            <h2 className="mt-4 text-xl font-semibold leading-snug text-white sm:text-2xl">{article.title}</h2>
            {(article.byline || article.date) && (
              <p className="mt-2 text-sm text-slate-400">
                {article.byline}
                {article.byline && article.date ? " · " : ""}
                {article.date}
              </p>
            )}
          </div>

          <div className="max-h-[65vh] overflow-y-auto p-6 sm:p-8">
            {Array.isArray(article.body) && (
              <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                {article.body.map((block, i) => {
                  if (block.type === "heading") {
                    return (
                      <h3 key={i} className="pt-2 text-base font-semibold text-white sm:text-lg">
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <p
                        key={i}
                        className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-4 text-purple-100"
                      >
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "list") {
                    const ListTag = block.ordered ? "ol" : "ul";
                    return (
                      <ListTag
                        key={i}
                        className={`space-y-2 pl-5 ${block.ordered ? "list-decimal" : "list-disc"}`}
                      >
                        {block.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ListTag>
                    );
                  }
                  return <p key={i}>{block.text}</p>;
                })}
              </div>
            )}

            {Array.isArray(article.images) && (
              <div className="space-y-4">
                {article.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full rounded-xl border border-slate-700/60"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
