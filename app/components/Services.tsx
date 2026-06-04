const services = [
  {
    t: "AI Visibility Audit",
    d: "A full benchmark of how ChatGPT, Perplexity, Gemini, Copilot, and AI Overviews answer the prompts that matter to your business — with a competitive share-of-voice scorecard.",
    icon: (
      <path d="M3 3v18h18M8 14l3-3 3 3 4-5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    t: "Citation-Ready Content",
    d: "We engineer pages and passages that LLMs love to quote: clear claims, definitions, comparisons, and answers structured exactly how models extract them.",
    icon: (
      <path d="M4 5h16M4 12h16M4 19h10" strokeLinecap="round" />
    ),
  },
  {
    t: "Entity & Schema Optimization",
    d: "Structured data, knowledge-graph alignment, and entity clarity so AI understands precisely who you are, what you do, and why you're the trusted source.",
    icon: (
      <path d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    t: "Authority & Mention Building",
    d: "We grow the off-site signals models rely on — placements, reviews, listings, and references on the high-trust sources that feed AI answers.",
    icon: (
      <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6 5.7 21l2.3-7.2-6-4.4h7.6L12 2Z" strokeLinejoin="round" />
    ),
  },
  {
    t: "AI Mention Monitoring",
    d: "Continuous tracking of how often you're cited, what AI says about you, and where competitors are pulling ahead — delivered as clear, actionable reporting.",
    icon: (
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" strokeLinejoin="round" />
    ),
  },
  {
    t: "llms.txt & AI Readiness",
    d: "Make your site machine-readable for the new wave of AI crawlers — clean access, llms.txt, and a technical foundation built for answer engines.",
    icon: (
      <path d="M8 6 2 12l6 6M16 6l6 6-6 6M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="container-px py-20 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">What we do</span>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Everything you need to get referenced
        </h2>
        <p className="mt-5 text-lg text-ink-muted">
          A complete GEO toolkit — from understanding where you stand to owning
          the answer.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.t} className="card group hover:-translate-y-1 hover:shadow-glow">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {s.icon}
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">{s.t}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
