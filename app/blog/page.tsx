import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { posts } from "./posts";

const SITE_URL = "https://getreferenced.co";

export const metadata: Metadata = {
  title: "GEO & AI Search Blog",
  description:
    "Practical guides on Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and getting your business cited by ChatGPT, Perplexity, and Google AI Overviews.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "GEO & AI Search Blog | GetReferenced.co",
    description:
      "Guides on Generative Engine Optimization and getting cited by AI search engines.",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  url: `${SITE_URL}/blog`,
  name: "GetReferenced.co — GEO & AI Search Blog",
  description:
    "Practical guides on Generative Engine Optimization (GEO) and getting cited by AI search engines.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.meta.title,
    url: `${SITE_URL}/blog/${p.meta.slug}`,
    datePublished: p.meta.date,
    description: p.meta.description,
  })),
};

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <main className="container-px py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The blog</span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Winning the <span className="text-gradient">AI search era</span>
          </h1>
          <p className="mt-5 text-lg text-ink-muted">
            Plain-English and technical guides on Generative Engine Optimization
            — how to get your business cited and recommended by ChatGPT,
            Perplexity, Gemini, and Google AI Overviews.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {posts.map((p, i) => (
            <a
              key={p.meta.slug}
              href={`/blog/${p.meta.slug}`}
              className={`card group flex flex-col hover:-translate-y-1 hover:shadow-glow ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-deep">
                <span className="rounded-full bg-brand-gradient-soft px-3 py-1">
                  {p.meta.category}
                </span>
                <span className="text-ink-muted">{p.meta.readingTime}</span>
              </div>
              <h2
                className={`mt-4 font-bold tracking-tight text-ink group-hover:text-brand-deep ${
                  i === 0 ? "text-2xl sm:text-3xl" : "text-xl"
                }`}
              >
                {p.meta.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {p.meta.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-ink-muted">
                  {formatDate(p.meta.date)}
                </span>
                <span className="text-sm font-semibold text-brand-deep">
                  Read →
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
