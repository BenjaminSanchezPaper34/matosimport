import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pièces détachées jet-ski — Toutes marques",
  description:
    "Catalogue de pièces détachées pour jet-ski Sea-Doo, Yamaha, Kawasaki. Moteur, transmission, électricité, câbles, coque. Livraison rapide, prix compétitifs.",
  openGraph: {
    title: "Pièces détachées jet-ski — Matos Import by Jeff",
    description: "Plus de 38 000 références de pièces détachées pour jet-ski toutes marques.",
  },
};

export default function CatalogueLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
