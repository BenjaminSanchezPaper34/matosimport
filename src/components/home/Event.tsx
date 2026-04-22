"use client";

export default function Event() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-black">
      {/* Background decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Label */}
        <div data-reveal className="mb-6 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Événement à ne pas manquer
          </p>
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
        </div>

        {/* Title */}
        <div data-reveal className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl leading-tight">
            10 ans de Matos Import
            <br />
            <span className="text-gold">×</span>{" "}
            <span className="text-gray-400">Social Club Sea-Doo</span>
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Deux journées exceptionnelles au Cap d&apos;Agde
          </p>
        </div>

        {/* Grand bloc dates */}
        <div data-reveal className="mb-12 flex items-center justify-center">
          <div className="flex items-center gap-8 sm:gap-16">
            <div className="text-center">
              <div className="text-6xl sm:text-8xl font-bold text-white leading-none tabular-nums">15</div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-500">Jeudi</div>
            </div>
            <div className="h-20 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />
            <div className="text-center">
              <div className="text-6xl sm:text-8xl font-bold text-white leading-none tabular-nums">16</div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-500">Vendredi</div>
            </div>
          </div>
        </div>

        <div data-reveal className="mb-12 text-center">
          <p className="text-2xl font-semibold text-accent uppercase tracking-wider">Mai 2026</p>
        </div>

        {/* Grid 2 jours */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* JOUR 1 */}
          <div
            data-reveal
            className="group relative rounded-3xl overflow-hidden border border-accent/20 bg-gradient-to-br from-[#0d0d0f] to-[#1a0a0c] p-8 sm:p-10 transition-all duration-500 hover:border-accent/40"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-accent/10 blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 7h-3V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3H4a1 1 0 0 0-1 1v3h18V8a1 1 0 0 0-1-1Z" />
                    <path d="M3 11v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">Jour 1</p>
                  <h3 className="text-2xl font-bold text-white">Concession ouverte</h3>
                </div>
              </div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-4 py-2">
                <span className="text-2xl font-bold text-accent">-10%</span>
                <span className="text-sm text-white">sur toute la concession (hors jets)</span>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-accent">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Remise exceptionnelle sur pièces, équipements &amp; accessoires</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-accent">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Essais de machines Sea-Doo sur place</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-accent">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Équipe Matos Import à votre écoute</span>
                </li>
              </ul>
            </div>
          </div>

          {/* JOUR 2 */}
          <div
            data-reveal
            className="group relative rounded-3xl overflow-hidden border border-gold/20 bg-gradient-to-br from-[#0d0d0f] to-[#1a1508] p-8 sm:p-10 transition-all duration-500 hover:border-gold/40"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-gold/10 blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1" />
                    <path d="M2 16a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1" />
                    <path d="m9 10 3-7 3 7" />
                    <path d="M12 3v7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">Jour 2</p>
                  <h3 className="text-2xl font-bold text-white">Rando d&apos;ouverture</h3>
                </div>
              </div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-4 py-2">
                <span className="text-sm font-semibold text-gold">Ouverture de saison</span>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-gold">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Ride collectif dans un cadre d&apos;exception</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-gold">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Cadeaux pour tous les participants</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-gold">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Apéritif dînatoire au retour</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-gold">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Location de jet possible sur place si besoin</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div data-reveal className="mt-12 flex flex-col items-center gap-4">
          <p className="text-center text-sm text-gray-400 max-w-xl">
            Venez avec votre jet et participez à la rando, ou louez une machine sur place.
            Places limitées — confirmez votre présence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0467265770"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-[0.98]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Je m&apos;inscris — 04 67 26 57 70
            </a>
            <a
              href="https://www.instagram.com/matos.importbyjeff/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              Plus d&apos;infos sur Instagram
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
