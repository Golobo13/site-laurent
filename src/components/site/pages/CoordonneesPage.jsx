import React from "react";
import { Phone, Mail, Building2 } from "lucide-react";
import PageShell from "../PageShell.jsx";
import { Section, Card, SITE } from "../shared.jsx";

export default function CoordonneesPage() {
  return (
    <PageShell>
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
    </PageShell>
  );
}
