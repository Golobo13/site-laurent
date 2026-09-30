import React, { useEffect, useState } from "react";
import { Home, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "./shared.jsx";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1800px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <a href="/" className="flex flex-shrink-0 items-center gap-2">
          <div className="relative leading-tight">
            <div className="whitespace-nowrap text-[26px] sm:text-[34px] lg:text-[60px] font-extrabold tracking-tight text-white">LG Conseil</div>
            <div className="whitespace-nowrap text-[14px] sm:text-[18px] lg:text-[32px] font-bold tracking-wide text-[#e2583f]">
              Experts en gestion
            </div>
          </div>
        </a>
        <nav className="hidden flex-wrap items-center justify-end gap-2.5 min-[1024px]:flex">
          <a
            href="/"
            aria-label="Retour à l'accueil"
            className="flex-shrink-0 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-2.5 text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/60 hover:from-purple-500/20 hover:to-blue-500/20 hover:text-white"
          >
            <Home className="h-4 w-4" />
          </a>
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
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Retour à l'accueil"
              className="flex-shrink-0 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-2.5 text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/60 hover:from-purple-500/20 hover:to-blue-500/20 hover:text-white"
            >
              <Home className="h-4 w-4" />
            </a>
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
  );
}
