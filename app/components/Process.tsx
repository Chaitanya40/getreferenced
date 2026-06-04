const steps = [
  {
    n: "01",
    t: "Audit",
    d: "We benchmark how often — and how — AI engines mention you today across the questions your buyers actually ask. You get a clear visibility scorecard versus your competitors.",
  },
  {
    n: "02",
    t: "Engineer",
    d: "We restructure content, entities, and structured data so models can find, trust, and quote you: citation-ready passages, schema, authority signals, and the facts AI needs.",
  },
  {
    n: "03",
    t: "Amplify",
    d: "We build the third-party signals AI weighs most — mentions, reviews, listings, and references on the sources models pull from when they form an answer.",
  },
  {
    n: "04",
    t: "Monitor",
    d: "We track your share of AI answers continuously and report what changed, where you're winning, and what to optimize next. GEO is a flywheel, not a one-off.",
  },
];

export function Process() {
  return (
    <section id="how" className="bg-mist/60 py-20 lg:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            A clear path to being the answer
          </h2>
          <p className="mt-5 text-lg text-ink-muted">
            A repeatable system that turns AI search from a threat into your most
            durable acquisition channel.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="card relative">
              <span className="text-sm font-bold text-gradient">{s.n}</span>
              <h3 className="mt-3 text-xl font-semibold text-ink">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.d}</p>
              {i < steps.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center text-brand-teal lg:flex">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
