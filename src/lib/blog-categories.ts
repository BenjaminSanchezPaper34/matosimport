// Code couleur pour les badges catégorie du blog
// Chaque catégorie a son ambiance visuelle propre

export const CATEGORY_BADGE: Record<string, { bg: string; text: string; border: string; ring: string }> = {
  // Événement — rouge accent (urgence, actualité chaude)
  "Événement": {
    bg: "bg-accent/15",
    text: "text-accent",
    border: "border-accent/30",
    ring: "bg-accent/90 text-white",
  },
  // Actualité — gold (information importante mais moins urgente)
  "Actualité": {
    bg: "bg-gold/15",
    text: "text-gold",
    border: "border-gold/30",
    ring: "bg-gold/90 text-black",
  },
  // Guide d'achat — bleu (conseil, comparatif, choix)
  "Guide d'achat": {
    bg: "bg-blue-500/15",
    text: "text-blue-400",
    border: "border-blue-500/30",
    ring: "bg-blue-500/90 text-white",
  },
  // Guide pratique — émeraude (savoir-faire, démarches)
  "Guide pratique": {
    bg: "bg-emerald-500/15",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    ring: "bg-emerald-500/90 text-white",
  },
  // Entretien — orange (mécanique, technique, atelier)
  "Entretien": {
    bg: "bg-orange-500/15",
    text: "text-orange-400",
    border: "border-orange-500/30",
    ring: "bg-orange-500/90 text-white",
  },
  // Destination — turquoise (voyage, lieux, exploration)
  "Destination": {
    bg: "bg-[#36b4a3]/15",
    text: "text-[#36b4a3]",
    border: "border-[#36b4a3]/30",
    ring: "bg-[#36b4a3]/90 text-white",
  },
};

// Style de fallback si la catégorie n'est pas reconnue
export const DEFAULT_BADGE = {
  bg: "bg-white/5",
  text: "text-gray-300",
  border: "border-white/10",
  ring: "bg-gray-500/90 text-white",
};

export function getBadge(category: string) {
  return CATEGORY_BADGE[category] ?? DEFAULT_BADGE;
}
