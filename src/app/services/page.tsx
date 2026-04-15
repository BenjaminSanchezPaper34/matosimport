import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Atelier, réparation, gardiennage jet-ski",
  description: "Atelier spécialisé jet-ski au Cap d'Agde. Réparation, entretien, hivernage, gardiennage. Mécaniciens Sea-Doo certifiés depuis 1991.",
};

const SERVICES = [
  {
    title: "Atelier & Réparation",
    description: "Notre atelier certifié Sea-Doo intervient sur toutes marques : diagnostic, réparation moteur, transmission, électricité. Devis gratuit.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
    features: ["Toutes marques", "Devis gratuit", "Pièces d'origine", "Mécaniciens certifiés"],
  },
  {
    title: "Entretien & Révision",
    description: "Révisions complètes selon les préconisations constructeur. Vidange, bougies, bague d'usure, courroie compresseur, circuit de refroidissement.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>,
    features: ["Vidange moteur", "Remplacement bougies", "Contrôle turbine", "Mise à jour logiciel"],
  },
  {
    title: "Hivernage",
    description: "Préparation complète de votre jet-ski pour l'hiver : stabilisation carburant, lubrification, protection anti-corrosion, débranchement batterie.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>,
    features: ["Rinçage complet", "Stabilisation carburant", "Protection corrosion", "Stockage batterie"],
  },
  {
    title: "Gardiennage",
    description: "Stockage couvert et sécurisé au Cap d'Agde, directement sur le port. Votre jet-ski est gardé, entretenu et prêt à naviguer quand vous voulez.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>,
    features: ["Stockage couvert", "Accès au port", "Mise à l'eau", "Surveillance"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Services</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            L&apos;atelier des passionnés
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            33 ans d&apos;expertise mécanique au service de votre jet-ski.
            Réparation, entretien, hivernage et gardiennage au Cap d&apos;Agde.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-20">
          {SERVICES.map((service) => (
            <div key={service.title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-white">{service.title}</h2>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span key={f} className="rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs text-gray-400">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-white/10 bg-accent/5 p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Besoin d&apos;une intervention ?</h2>
          <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
            Contactez-nous pour un devis gratuit ou prenez rendez-vous directement à l&apos;atelier.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0467265770" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              Appeler — 04 67 26 57 70
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-all">
              Nous écrire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
