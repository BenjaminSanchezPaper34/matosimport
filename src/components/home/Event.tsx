"use client";

export default function Event() {
  return (
    <section id="evenement" className="relative py-24 lg:py-32 overflow-hidden bg-black scroll-mt-20">
      {/* Photo de fond — Social Club Sea-Doo */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/event/social-club.webp"
          alt=""
          className="h-full w-full object-cover opacity-70"
          loading="lazy"
        />
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/85" />
        {/* Glows colorés par-dessus */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/15 blur-[120px]" />
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
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            10 ans de Matos Import
            <br />
            <span className="text-gold">×</span>{" "}
            <span className="text-gray-200">Social Club Sea-Doo</span>
          </h2>
          <p className="mt-6 text-lg text-gray-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Deux journées exceptionnelles au Cap d&apos;Agde
          </p>
        </div>

        {/* Grand bloc dates */}
        <div data-reveal className="mb-12 flex items-center justify-center">
          <div className="flex items-center gap-8 sm:gap-16">
            <div className="text-center">
              <div className="text-6xl sm:text-8xl font-bold text-white leading-none tabular-nums drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">15</div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">Jeudi</div>
            </div>
            <div className="h-20 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />
            <div className="text-center">
              <div className="text-6xl sm:text-8xl font-bold text-white leading-none tabular-nums drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">16</div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">Vendredi</div>
            </div>
          </div>
        </div>

        <div data-reveal className="mb-12 text-center">
          <p className="text-2xl font-semibold text-accent uppercase tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Mai 2026</p>
        </div>

        {/* Grid 2 jours */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* JOUR 1 — miroir : contenu aligné à DROITE sur desktop */}
          <div
            data-reveal
            className="group relative rounded-3xl overflow-hidden border border-accent/20 bg-gradient-to-bl from-[#0d0d0f] to-[#1a0a0c] p-8 sm:p-10 transition-all duration-500 hover:border-accent/40"
          >
            <div className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full bg-accent/10 blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity" />
            {/* Ligne décorative verticale — côté intérieur (droit) */}
            <div className="hidden lg:block absolute top-8 bottom-8 right-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />

            <div className="relative z-10 flex flex-col lg:items-end lg:text-right">
              <div className="flex items-center gap-3 mb-6 lg:flex-row-reverse">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent shrink-0">
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

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-4 py-2 self-start lg:self-end">
                <span className="text-sm font-bold text-accent">-10%</span>
                <span className="text-sm font-semibold text-white">sur toute la concession (hors jets)</span>
              </div>

              <ul className="space-y-3 text-gray-300 w-full">
                <li className="flex items-start gap-3 lg:flex-row-reverse">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-accent">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Remise exceptionnelle sur pièces, équipements &amp; accessoires</span>
                </li>
                <li className="flex items-start gap-3 lg:flex-row-reverse">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-accent">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Essais de machines Sea-Doo sur place</span>
                </li>
                <li className="flex items-start gap-3 lg:flex-row-reverse">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-accent">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Équipe Matos Import à votre écoute</span>
                </li>
                <li className="flex items-start gap-3 lg:flex-row-reverse">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-accent">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Ambiance festive — on fête les 10 ans&nbsp;!</span>
                </li>
              </ul>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfKzAWxpBKrrceQW14_3rfvSLVzDxrlOsp8RUdCXD_4irUQzQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/30 transition-all hover:bg-accent-hover hover:shadow-accent/50 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto sm:min-w-[260px]"
              >
                Réserver un essai
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
            </div>
          </div>

          {/* JOUR 2 — miroir : contenu aligné à GAUCHE sur desktop */}
          <div
            data-reveal
            className="group relative rounded-3xl overflow-hidden border border-gold/20 bg-gradient-to-br from-[#0d0d0f] to-[#1a1508] p-8 sm:p-10 transition-all duration-500 hover:border-gold/40"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-gold/10 blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity" />
            {/* Ligne décorative verticale — côté intérieur (gauche) */}
            <div className="hidden lg:block absolute top-8 bottom-8 left-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

            <div className="relative z-10 flex flex-col lg:items-start lg:text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold shrink-0">
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

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-4 py-2 self-start">
                <span className="text-sm font-semibold text-gold">Ouverture de saison</span>
              </div>

              <ul className="space-y-3 text-gray-300 w-full">
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

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdkRGLLfHOYKP8Go7lkUJu0ItjZgZfbVD6yDViQfRaSs3JT9w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-black shadow-lg shadow-gold/30 transition-all hover:bg-gold/90 hover:shadow-gold/50 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto sm:min-w-[260px]"
              >
                S&apos;inscrire à la rando
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* 3e card — Bannière officielle partenariat Sea-Doo */}
        <div data-reveal className="mt-6 group relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 transition-all duration-500 hover:border-white/25">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/event/popup-10ans.webp"
            alt="10 ans Matos Import × Social Club Sea-Doo — 15 et 16 mai 2026"
            className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        {/* Bottom note */}
        <div data-reveal className="mt-12 text-center">
          <p className="text-sm text-gray-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Places limitées — inscription obligatoire via les formulaires ci-dessus.
            <br className="hidden sm:block" />
            Une question&nbsp;?
            <a href="tel:0467265770" className="text-white hover:text-accent transition-colors ml-2">04 67 26 57 70</a>
          </p>
        </div>
      </div>
    </section>
  );
}
