import React from "react";
import PageShell from "../PageShell.jsx";
import { Section, Card } from "../shared.jsx";

export default function PourquoiPage() {
  return (
    <PageShell>
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
          </Card>
        </div>
      </Section>
    </PageShell>
  );
}
