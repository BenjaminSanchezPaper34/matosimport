import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Matos Import by Jeff, Cap d'Agde",
  description: "Contactez Matos Import by Jeff au Cap d'Agde. Téléphone, email, formulaire et plan d'accès. Concessionnaire Sea-Doo, pièces jet-ski.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Contact</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Nous trouver
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left — Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
              <h2 className="text-lg font-bold text-white mb-4">Concession</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="text-accent mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  <div>
                    <p className="text-sm font-medium text-white">Matos Import by Jeff</p>
                    <p className="text-sm text-gray-400">4 Parking du Temps Libre</p>
                    <p className="text-sm text-gray-400">Île des Loisirs</p>
                    <p className="text-sm text-gray-400">34300 Agde, France</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="text-accent shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <a href="tel:0467265770" className="text-sm text-white hover:text-accent transition-colors font-medium">04 67 26 57 70</a>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="text-accent shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  <a href="mailto:matosimportbyjeff.34@gmail.com" className="text-sm text-white hover:text-accent transition-colors">matosimportbyjeff.34@gmail.com</a>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="text-accent shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  <div>
                    <p className="text-sm text-white font-medium">Mardi — Samedi : 9h – 17h</p>
                    <p className="text-xs text-gray-500">Fermé dimanche et lundi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
              <h2 className="text-lg font-bold text-white mb-4">Suivez-nous</h2>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/matos.importbyjeff/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/5 px-4 py-3 text-sm text-gray-400 hover:text-white hover:border-white/10 transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  Instagram
                </a>
                <a href="https://www.facebook.com/matosimportbyjeff/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/5 px-4 py-3 text-sm text-gray-400 hover:text-white hover:border-white/10 transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  Facebook
                </a>
                <a href="https://www.tiktok.com/@matosimportbyjeff" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/5 px-4 py-3 text-sm text-gray-400 hover:text-white hover:border-white/10 transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.11V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" /></svg>
                  TikTok
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
              <h2 className="text-lg font-bold text-white mb-4">Liens rapides</h2>
              <div className="space-y-2">
                <a href="https://www.matosimport.com/fr/parts/jet-ski" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-sm text-gray-400 hover:text-white transition-colors py-2 border-b border-white/5">
                  Boutique pièces détachées
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                </a>
                <a href="https://www.leboncoin.fr/recherche?text=matos+import+by+jeff&kst=k" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-sm text-gray-400 hover:text-white transition-colors py-2 border-b border-white/5">
                  Jets d&apos;occasion
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                </a>
                <a href="https://locationjet.matosimport.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-sm text-gray-400 hover:text-white transition-colors py-2">
                  Location jet-ski
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right — Map */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/5 overflow-hidden h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.5!2d3.5009957!3d43.2770508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b146e3a1d8c9c3%3A0x4d8a7e5f7e5f7e5f!2sMatos%20Import!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Plan d'accès Matos Import"
              />
            </div>

            <div className="rounded-2xl border border-white/5 bg-accent/5 p-6 text-center">
              <p className="text-sm text-gray-300 mb-3">
                <strong className="text-white">Accès facile</strong> — À 5 min de l&apos;autoroute A9 (sortie Agde),
                sur l&apos;Île des Loisirs du Cap d&apos;Agde. Parking gratuit devant la concession.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=43.2770508,3.5009957"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-all"
              >
                Itinéraire Google Maps
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
