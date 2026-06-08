import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { getPost, getRelatedPosts, posts } from "../posts";

const SITE_URL = "https://getreferenced.co";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.meta.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const { meta } = post;
  const url = `${SITE_URL}/blog/${meta.slug}`;
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: `/blog/${meta.slug}` },
    openGraph: {
      type: "article",
      url,
      title: meta.title,
      description: meta.description,
      publishedTime: meta.date,
      modifiedTime: meta.updated ?? meta.date,
      authors: ["GetReferenced.co"],
      tags: meta.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const { meta, Body } = post;
  const related = getRelatedPosts(meta.slug);
  const url = `${SITE_URL}/blog/${meta.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: meta.title,
    description: meta.description,
    url,
    datePublished: meta.date,
    dateModified: meta.updated ?? meta.date,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/blog#blog` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    keywords: (meta.keywords ?? meta.tags).join(", "),
    articleSection: meta.category,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: meta.title, item: url },
    ],
  };

  const faqJsonLd = meta.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: meta.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <main>
        <article className="container-px py-14 lg:py-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mx-auto max-w-3xl text-sm text-ink-muted"
          >
            <a href="/" className="hover:text-ink">
              Home
            </a>
            <span className="px-2">/</span>
            <a href="/blog" className="hover:text-ink">
              Blog
            </a>
          </nav>

          {/* Header */}
          <header className="mx-auto mt-6 max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-deep">
              <span className="rounded-full bg-brand-gradient-soft px-3 py-1">
                {meta.category}
              </span>
              <span className="text-ink-muted">{meta.readingTime}</span>
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {meta.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              {meta.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-3 border-y border-ink/[0.07] py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                GR
              </div>
              <div className="text-sm">
                <p className="font-semibold text-ink">GetReferenced.co</p>
                <p className="text-ink-muted">
                  Published {formatDate(meta.date)}
                </p>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="article-prose mx-auto mt-10 max-w-3xl">
            <Body />
          </div>

          {/* On-page FAQ */}
          {meta.faqs?.length ? (
            <section className="mx-auto mt-16 max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                Frequently asked questions
              </h2>
              <div className="mt-6 divide-y divide-ink/[0.08]">
                {meta.faqs.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink">
                      {f.q}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mist text-brand-deep transition-transform duration-200 group-open:rotate-45">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          {/* CTA */}
          <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl bg-brand-gradient p-px shadow-glow">
            <div className="flex flex-col items-center gap-4 rounded-[15px] bg-white px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
              <div>
                <p className="text-lg font-semibold text-ink">
                  Want to know if AI search recommends your business?
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  Get a free AI visibility audit — see exactly where you stand
                  today, with no commitment.
                </p>
              </div>
              <a href="/#contact" className="btn-primary shrink-0">
                Get a free audit
              </a>
            </div>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="container-px pb-20">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Keep reading
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {related.map((p) => (
                  <a
                    key={p.meta.slug}
                    href={`/blog/${p.meta.slug}`}
                    className="card group hover:-translate-y-1 hover:shadow-glow"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-deep">
                      {p.meta.category}
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-ink group-hover:text-brand-deep">
                      {p.meta.title}
                    </h3>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
