export function CTA() {
  return (
    <section id="contact" className="container-px pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-16 text-center shadow-glow sm:px-16">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See where you stand in AI search
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">
            Get a free AI visibility audit. We&rsquo;ll show you exactly how
            ChatGPT, Perplexity, Gemini, and AI Overviews answer your buyers&rsquo;
            questions today — and what it takes to get referenced.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@getreferenced.co?subject=Free%20AI%20Visibility%20Audit&body=Hi%20GetReferenced%20team%2C%0A%0AI%27d%20like%20a%20free%20AI%20visibility%20audit%20for%3A%0A%0AWebsite%3A%20%0AIndustry%3A%20%0AMain%20competitors%3A%20%0A"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-deep shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Request my free audit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="mailto:hello@getreferenced.co"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              hello@getreferenced.co
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
