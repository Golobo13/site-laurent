import React from "react";
import { Star, User } from "lucide-react";
import PageShell from "../PageShell.jsx";
import { Section } from "../shared.jsx";

export default function TemoignagesPage() {
  return (
    <PageShell>
      <Section id="temoignages" kicker="Témoignages" title="Ce que disent nos clients">
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
      </Section>
    </PageShell>
  );
}
