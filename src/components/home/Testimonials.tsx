const REVIEWS = [
  {
    name: "Davis P.",
    rating: 5,
    text: "Très bonne adresse. Personnel très pro et sympathique. Large gamme de jet ski de 130 à 300cv. Meilleur adresse pour sessions jet ski sur le Cap d'Agde. Merci",
    source: "Google",
  },
  {
    name: "Florine P.",
    rating: 5,
    text: "Deuxième séance de Jet avec Thomas comme moniteur pour mon anniversaire, 1h intense et incroyable ! On s'est régalé ! Merci pour tout ! Activité réussie !",
    source: "Google",
  },
  {
    name: "Valentin J.",
    rating: 5,
    text: "Super Service, J'ai déposé mon Jet Ski pour une réparation, tout est nickel, meilleur de la région. Merci Jeff",
    source: "Google",
  },
  {
    name: "Maxime",
    rating: 5,
    text: "Accueil vraiment sympa, matériel récent et très bien entretenu. Je recommande, balade exceptionnelle à ne pas manquer.",
    source: "TripAdvisor",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#050507]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              Avis clients
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ce que disent
              <br />
              <span className="text-gray-400">nos clients</span>
            </h2>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-400">4.8/5 sur Google</span>
            </div>
          </div>
          <a
            href="https://g.page/r/CXR1K6gfRNR-EBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-[0.98] shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
            </svg>
            Déposer un avis
          </a>
        </div>

        <div data-reveal data-reveal-stagger="true" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review) => (
            <div key={review.name} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <Stars count={review.rating} />
              <p className="mt-4 text-sm leading-relaxed text-gray-300 line-clamp-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{review.name}</p>
                  <p className="text-[10px] text-gray-600">{review.source}</p>
                </div>
                {review.source === "Google" ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" fill="#34E0A1" />
                    <path d="M12 6.5c-1.38 0-2.5 1.12-2.5 2.5a1 1 0 0 0 2 0c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.17A2.51 2.51 0 0 0 14.5 9c0-1.38-1.12-2.5-2.5-2.5zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="white" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
