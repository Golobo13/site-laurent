import React, { useMemo } from "react";
import PageShell from "../PageShell.jsx";
import { Section, Accordion } from "../shared.jsx";

export default function FaqPage() {
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

  return (
    <PageShell>
      <Section id="faq" kicker="Foire aux questions" title="Tout ce que vous voulez savoir">
        <Accordion items={faq} />
      </Section>
    </PageShell>
  );
}
