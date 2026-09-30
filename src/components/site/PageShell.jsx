import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { FloatingOrbs, AnimatedGrid } from "./shared.jsx";

// Coquille commune à toutes les pages : fond animé + header + footer.
// `mainClassName` permet d'ajuster l'espacement vertical (ex: min-h-screen
// sur la dernière section pour l'ancienne page unique).
export default function PageShell({ children, mainClassName = "" }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative">
      <FloatingOrbs />
      <AnimatedGrid />
      <Header />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </div>
  );
}
