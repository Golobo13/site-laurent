import React from "react";
import { ArrowRight } from "lucide-react";
import PageShell from "../PageShell.jsx";
import { Section, PUBLICATIONS, DominoIcon } from "../shared.jsx";

export default function PublicationsPage() {
  return (
    <PageShell>
      <Section id="conseils" kicker="Publications" title="Laurent partage son expertise">
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
    </PageShell>
  );
}
