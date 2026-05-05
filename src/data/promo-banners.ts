// Bandeaux promo affichés en haut du site pendant des fenêtres de dates précises.
// Pour ajouter une promo : ajouter un objet dans le tableau ci-dessous.
// Si plusieurs sont actives en même temps, seule la première (par ordre) s'affiche.

export interface PromoBanner {
  /** Identifiant unique — sert de clé localStorage pour mémoriser la fermeture */
  id: string;
  /** Dates au format YYYY-MM-DD (incluses) */
  startDate: string;
  endDate: string;
  /** Texte court avant la mise en avant */
  intro: string;
  /** Texte mis en avant en gras */
  highlight: string;
  /** Détail / sous-titre court */
  detail: string;
  /** URL cliquable (article blog, page dédiée…) */
  href: string;
  /** Texte du CTA final */
  ctaLabel: string;
  /** Thème de couleur — choisit l'accent du bandeau */
  theme: "seadoo" | "promo" | "info";
}

export const PROMO_BANNERS: PromoBanner[] = [
  {
    id: "seadoo-days-2026",
    startDate: "2026-05-05",
    endDate: "2026-05-17",
    intro: "Sea-Doo Days du 7 au 17 mai",
    highlight: "1 000 € de remise",
    detail: "sur les Spark® et Spark® Trixx™",
    href: "/blog/seadoo-days-2026-mai-1000-euros-remise-spark",
    ctaLabel: "En savoir plus",
    theme: "seadoo",
  },
];

/** Renvoie la promo active aujourd'hui (la première dans l'ordre du tableau) */
export function getActivePromo(now: Date = new Date()): PromoBanner | null {
  const today = now.toISOString().slice(0, 10); // YYYY-MM-DD
  return (
    PROMO_BANNERS.find((p) => p.startDate <= today && today <= p.endDate) ?? null
  );
}

/**
 * Mode preview : permet de prévisualiser une promo avant sa date de lancement.
 * Usage : ajouter ?preview-promo=ID à l'URL (ex: ?preview-promo=seadoo-days-2026)
 */
export function getPromoById(id: string): PromoBanner | null {
  return PROMO_BANNERS.find((p) => p.id === id) ?? null;
}

/** Tokens de styles par thème */
export const PROMO_THEMES = {
  seadoo: {
    bg: "bg-gradient-to-r from-[#0a3d3d] via-[#0d4f4f] to-[#0a3d3d]",
    text: "text-white",
    highlight: "text-[#5fd9c1]",
    border: "border-b border-[#36b4a3]/30",
  },
  promo: {
    bg: "bg-gradient-to-r from-[#1a0a0c] via-[#2a0e10] to-[#1a0a0c]",
    text: "text-white",
    highlight: "text-accent",
    border: "border-b border-accent/30",
  },
  info: {
    bg: "bg-gradient-to-r from-[#1a1508] via-[#2a210d] to-[#1a1508]",
    text: "text-white",
    highlight: "text-gold",
    border: "border-b border-gold/30",
  },
} as const;
