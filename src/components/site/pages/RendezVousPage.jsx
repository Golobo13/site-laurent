import React from "react";
import { CalendarClock, Check } from "lucide-react";
import PageShell from "../PageShell.jsx";
import { Section, Card, SITE } from "../shared.jsx";

export default function RendezVousPage() {
  return (
    <PageShell>
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
      </Section>
    </PageShell>
  );
}
