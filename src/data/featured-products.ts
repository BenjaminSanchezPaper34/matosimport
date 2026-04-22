export interface FeaturedProduct {
  ref: string;
  name: string;
  description: string;
  brand: "Sea-Doo" | "Kawasaki" | "XPS" | "NGK" | "Multi";
  category: "lubrifiants" | "bougies" | "pompe" | "electrique" | "mecanique" | "securite";
  image?: string; // à remplir quand les photos seront dispo
}

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    ref: "9779291",
    name: "Huile 4T XPS 5W40",
    description: "Huile semi-synthétique 4 temps 3,785L — tous modèles Sea-Doo",
    brand: "XPS",
    category: "lubrifiants",
  },
  {
    ref: "9779400",
    name: "Kit vidange Sea-Doo",
    description: "Huile 5W40 1500cc + filtre + joints — entretien complet",
    brand: "XPS",
    category: "lubrifiants",
  },
  {
    ref: "KR9E-G",
    name: "Bougie NGK KR9E-G",
    description: "Pour Sea-Doo RXT / RXP / GTX 2016-2018",
    brand: "NGK",
    category: "bougies",
  },
  {
    ref: "420956741",
    name: "Filtre à huile 4-TEC",
    description: "GTI / GTX / RXT / RXP / GTR — origine Sea-Doo",
    brand: "Sea-Doo",
    category: "bougies",
  },
  {
    ref: "267000419",
    name: "Bague d'usure GTX 4-TEC",
    description: "GTI 130 / GTI 155 / GTI 185 — pièce d'usure stratégique",
    brand: "Sea-Doo",
    category: "pompe",
  },
  {
    ref: "278003400",
    name: "Clé programmable 4-TEC",
    description: "Compatible toute la gamme Sea-Doo 4 temps",
    brand: "Sea-Doo",
    category: "electrique",
  },
  {
    ref: "271001920",
    name: "Anode de zinc",
    description: "Protection anti-corrosion — entretien recommandé chaque saison",
    brand: "Sea-Doo",
    category: "securite",
  },
  {
    ref: "295100330",
    name: "Kit de sauvetage",
    description: "Obligatoire pour petites embarcations — conforme réglementation",
    brand: "Multi",
    category: "securite",
  },
];

// Construit l'URL de recherche sur la boutique PrestaShop à partir du nom + ref
export function buildProductSearchUrl(product: FeaturedProduct): string {
  const query = encodeURIComponent(`${product.name} ${product.ref}`.trim());
  return `https://www.matosimport.com/fr/recherche?s=${query}`;
}

export const CATEGORY_LABELS: Record<FeaturedProduct["category"], string> = {
  lubrifiants: "Lubrifiants",
  bougies: "Bougies & Filtres",
  pompe: "Pompe & Transmission",
  electrique: "Électricité",
  mecanique: "Mécanique",
  securite: "Sécurité",
};

export const BRAND_COLORS: Record<FeaturedProduct["brand"], { bg: string; text: string }> = {
  "Sea-Doo": { bg: "bg-accent/15", text: "text-accent" },
  "XPS": { bg: "bg-blue-500/15", text: "text-blue-400" },
  "NGK": { bg: "bg-orange-500/15", text: "text-orange-400" },
  "Kawasaki": { bg: "bg-emerald-500/15", text: "text-emerald-400" },
  "Multi": { bg: "bg-white/10", text: "text-gray-300" },
};
