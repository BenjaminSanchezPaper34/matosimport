import { FEATURED_PRODUCTS, CATEGORY_LABELS, BRAND_COLORS, buildProductSearchUrl } from "@/data/featured-products";

// Icônes par catégorie
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  lubrifiants: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2h4v6h-4z" />
      <path d="M14 8h2a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h2" />
      <path d="M12 14v4" />
    </svg>
  ),
  bougies: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2v8l-3 2v4l3-2 3 2 3-2 3 2v-4l-3-2V2" />
      <path d="M7 22h10" />
      <path d="M9 18v4" />
      <path d="M15 18v4" />
    </svg>
  ),
  pompe: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>
  ),
  electrique: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  mecanique: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  securite: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

export default function FeaturedProducts() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#050507] overflow-hidden">
      {/* Accents lumineux */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div data-reveal className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">
              Produits phares
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Les pièces que nos
              <br />
              <span className="text-gray-400">clients préfèrent</span>
            </h2>
            <p className="mt-4 text-sm text-gray-500 max-w-md">
              Une sélection de nos références les plus demandées — parmi les 38 000+ pièces de notre catalogue.
            </p>
          </div>
          <a
            href="https://www.matosimport.com/fr/parts/jet-ski"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 shrink-0"
          >
            Tout le catalogue
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
          </a>
        </div>

        {/* Grid de cards */}
        <div data-reveal data-reveal-stagger="true" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((product) => {
            const brandStyle = BRAND_COLORS[product.brand];
            return (
              <a
                key={product.ref}
                href={buildProductSearchUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-2xl border border-white/5 bg-gradient-to-br from-[#0d0d0f] to-[#111114] p-6 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden"
              >
                {/* Glow décoratif au hover */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badges top */}
                <div className="relative flex items-start justify-between mb-6">
                  <span className={`inline-flex items-center rounded-full ${brandStyle.bg} px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${brandStyle.text}`}>
                    {product.brand}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-gray-600 font-mono">
                    {CATEGORY_LABELS[product.category]}
                  </span>
                </div>

                {/* Icône catégorie */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.08] border border-white/5 text-gold mb-6 group-hover:text-accent group-hover:border-accent/20 transition-all">
                  {CATEGORY_ICONS[product.category]}
                </div>

                {/* Nom + description */}
                <h3 className="relative text-lg font-bold text-white mb-2 leading-tight group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="relative text-xs text-gray-500 leading-relaxed flex-1 mb-4">
                  {product.description}
                </p>

                {/* Footer : ref + arrow */}
                <div className="relative flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">
                    Réf. {product.ref}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400 group-hover:text-accent transition-colors">
                    <span>Voir</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Note bas */}
        <div data-reveal className="mt-10 text-center">
          <p className="text-xs text-gray-600">
            Pièces compatibles avec la plupart des modèles récents — utilisez le configurateur du haut de page pour trouver votre référence exacte.
          </p>
        </div>
      </div>
    </section>
  );
}
