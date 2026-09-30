import React from "react";
import { SITE } from "./shared.jsx";

export default function Footer() {
  return (
    <footer id="mentions" className="border-t border-slate-800/60 py-12">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} {SITE.brand}. Tous droits réservés - Marseille.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              <a href="/mentions-legales" className="hover:text-slate-300 hover:underline">Mentions légales</a>
              {" · "}
              <a href="/confidentialite" className="hover:text-slate-300 hover:underline">Politique de confidentialité</a>
              {" · "}
              <a href="/confidentialite" className="hover:text-slate-300 hover:underline">RGPD</a> (finalités, durée de conservation et droits d'accès).
            </p>
          </div>
          <div className="text-sm text-slate-400">
            <p>Ce site n'utilise que des cookies techniques strictement nécessaires à son fonctionnement, aucun traceur publicitaire ni outil de mesure d'audience.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
