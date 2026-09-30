import React from "react";
import { TrendingUp, FileText, Scale } from "lucide-react";
import PageShell from "../PageShell.jsx";
import { Section, ServiceCard } from "../shared.jsx";

export default function MissionsPage() {
  return (
    <PageShell>
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
    </PageShell>
  );
}
