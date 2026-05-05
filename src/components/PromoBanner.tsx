"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getActivePromo, getPromoById, PROMO_THEMES } from "@/data/promo-banners";

const STORAGE_PREFIX = "promo-banner-dismissed:";

// Helpers localStorage protégés (mode privé / SSR / quotas peuvent throw)
const safeStorage = {
  get(key: string): string | null {
    try {
      if (typeof window === "undefined") return null;
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string) {
    try {
      if (typeof window === "undefined") return;
      window.localStorage.setItem(key, value);
    } catch {
      // ignore
    }
  },
};

export default function PromoBanner() {
  const [visible, setVisible] = useState(false);
  const [promo, setPromo] = useState(() => getActivePromo());

  useEffect(() => {
    // Mode preview via ?preview-promo=ID (utile avant la date de lancement)
    const params = new URLSearchParams(window.location.search);
    const previewId = params.get("preview-promo");
    const active = previewId ? getPromoById(previewId) : getActivePromo();

    setPromo(active);
    if (!active) return;
    // En mode preview on bypass aussi le localStorage (pour toujours voir le rendu)
    if (!previewId) {
      const dismissed = safeStorage.get(STORAGE_PREFIX + active.id);
      if (dismissed === "1") return;
    }
    setVisible(true);
  }, []);

  // Pousse la navbar fixe sous le bandeau via une variable CSS
  useEffect(() => {
    const root = document.documentElement;
    if (visible) root.style.setProperty("--promo-banner-h", "40px");
    else root.style.setProperty("--promo-banner-h", "0px");
    return () => {
      root.style.setProperty("--promo-banner-h", "0px");
    };
  }, [visible]);

  if (!visible || !promo) return null;

  const theme = PROMO_THEMES[promo.theme];

  const close = () => {
    setVisible(false);
    safeStorage.set(STORAGE_PREFIX + promo.id, "1");
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-[60] ${theme.bg} ${theme.text} ${theme.border}`}>
      <div className="relative mx-auto max-w-7xl px-10 sm:px-12 py-2.5 flex items-center justify-center">
        {/* Texte centré */}
        <Link href={promo.href} className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0.5 text-xs sm:text-sm hover:opacity-90 transition-opacity text-center">
          <span className={`hidden sm:inline-flex h-2 w-2 rounded-full ${theme.highlight.replace("text-", "bg-")} animate-pulse self-center mr-1`} />
          <span className="font-medium">{promo.intro}</span>
          <span className={`font-bold ${theme.highlight}`}>{promo.highlight}</span>
          <span className="hidden sm:inline opacity-90">{promo.detail}</span>
          <span className={`inline-flex items-center gap-1 font-semibold ${theme.highlight} hover:underline whitespace-nowrap`}>
            <span className="hidden sm:inline">→ {promo.ctaLabel}</span>
            <span className="sm:hidden">→</span>
          </span>
        </Link>

        {/* Bouton fermer (positionné en absolu pour ne pas décaler le centrage) */}
        <button
          onClick={close}
          aria-label="Fermer le bandeau promo"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
