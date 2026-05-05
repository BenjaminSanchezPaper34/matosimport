import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">
        Erreur 404
      </p>
      <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
        Page introuvable
      </h1>
      <p className="max-w-md text-gray-400 mb-10">
        Cette page n&apos;existe pas, a été déplacée, ou le lien est incorrect.
        Pas de souci — voici quelques pistes pour rebondir.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover transition-all"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-all"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
