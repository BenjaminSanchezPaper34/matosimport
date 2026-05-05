import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { getBadge } from "@/lib/blog-categories";

// Rendu inline du markdown : transforme **gras** et [lien](url) en éléments React
function renderInline(text: string): React.ReactNode {
  // Tokenise sur **bold** d'abord
  const parts: Array<{ type: "text" | "bold"; value: string }> = [];
  let remaining = text;
  while (remaining.length > 0) {
    const match = remaining.match(/\*\*([^*]+)\*\*/);
    if (!match || match.index === undefined) {
      parts.push({ type: "text", value: remaining });
      break;
    }
    if (match.index > 0) parts.push({ type: "text", value: remaining.slice(0, match.index) });
    parts.push({ type: "bold", value: match[1] });
    remaining = remaining.slice(match.index + match[0].length);
  }
  return parts.map((p, idx) =>
    p.type === "bold" ? <strong key={idx} className="font-semibold text-white">{p.value}</strong> : <span key={idx}>{p.value}</span>
  );
}

// Pré-génère les pages statiques pour tous les articles connus
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

// Pour les slugs non listés ci-dessus, déclenche un vrai 404 (au lieu de SSR à la volée)
export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article introuvable" };
  return {
    title: `${post.title} — Matos Import`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function BlogArticle({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="pt-20 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-400 truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          {(() => {
            const b = getBadge(post.category);
            return (
              <span className={`inline-flex rounded-full ${b.bg} border ${b.border} px-3 py-1 text-xs font-semibold ${b.text} mb-4`}>
                {post.category}
              </span>
            );
          })()}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>{new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>•</span>
            <span>{post.readTime} de lecture</span>
            <span>•</span>
            <span>Par Matos Import</span>
          </div>
        </div>

        {/* Hero image — hauteur proportionnelle à l'image, jamais recadrée */}
        <div className="relative rounded-2xl overflow-hidden mb-12 bg-white/[0.02]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="block w-full h-auto"
          />
        </div>

        {/* Content — markdown-like rendering */}
        <div className="prose-custom">
          {post.content.split("\n").map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return <div key={i} className="h-4" />;
            if (trimmed.startsWith("## "))
              return <h2 key={i} className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4">{renderInline(trimmed.replace("## ", ""))}</h2>;
            if (trimmed.startsWith("### "))
              return <h3 key={i} className="text-lg font-semibold text-white mt-6 mb-2">{renderInline(trimmed.replace("### ", ""))}</h3>;
            // Ligne entièrement en gras (titre de bloc en gold)
            if (trimmed.startsWith("**") && trimmed.endsWith("**") && trimmed.lastIndexOf("**") === trimmed.length - 2)
              return <p key={i} className="text-sm font-semibold text-gold mt-4 mb-1">{trimmed.replace(/\*\*/g, "")}</p>;
            if (trimmed.startsWith("- "))
              return <li key={i} className="text-sm text-gray-400 leading-relaxed ml-4 list-disc">{renderInline(trimmed.replace("- ", ""))}</li>;
            if (trimmed.startsWith("| ")) {
              const cells = trimmed.split("|").filter(Boolean).map((c) => c.trim());
              if (cells.every((c) => c.match(/^-+$/))) return null;
              return (
                <div key={i} className="grid grid-cols-2 gap-4 text-sm border-b border-white/5 py-2">
                  {cells.map((cell, j) => (
                    <span key={j} className={j === 0 ? "text-gray-300 font-medium" : "text-gray-500"}>{renderInline(cell)}</span>
                  ))}
                </div>
              );
            }
            return <p key={i} className="text-sm text-gray-400 leading-relaxed mb-3">{renderInline(trimmed)}</p>;
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-accent/5 p-8 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Besoin de pièces ou d&apos;un conseil ?</h3>
          <p className="text-sm text-gray-400 mb-4">Notre atelier est ouvert du mardi au samedi, 9h-17h.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pieces-detachees"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-all"
            >
              Voir nos pièces
            </Link>
            <a
              href="tel:0467265770"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all"
            >
              04 67 26 57 70
            </a>
          </div>
        </div>

        {/* Related articles */}
        {otherPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-lg font-bold text-white mb-6">À lire aussi</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-white/10"
                >
                  <div className="h-20 w-20 shrink-0 rounded-lg overflow-hidden bg-gray-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`text-[10px] font-medium ${getBadge(p.category).text}`}>{p.category}</span>
                    <h4 className="text-sm font-semibold text-white leading-snug group-hover:text-accent transition-colors line-clamp-2 mt-0.5">
                      {p.title}
                    </h4>
                    <span className="text-[10px] text-gray-600 mt-1 block">{p.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
