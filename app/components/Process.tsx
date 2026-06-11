const steps = [
  {
    n: "01",
    t: "Free audit",
    d: "We check how you currently show up on Google and AI tools — and where you’re invisible. You get a clear, plain-English report on what’s costing you customers.",
  },
  {
    n: "02",
    t: "We fix it",
    d: "We optimize your Google profile, website, listings, and content so search engines and AI tools confidently find and recommend you. Done for you — minimal effort on your side.",
  },
  {
    n: "03",
    t: "You get found",
    d: "More of the right customers reach you — calls, WhatsApp messages, and walk-ins — and we track exactly where they’re coming from.",
  },
];

export function Process() {
  return (
    <section id="how" className="bg-mist/60 py-20 lg:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Three simple steps to getting found
          </h2>
          <p className="mt-5 text-lg text-ink-muted">
            No jargon, no long contracts. We show you the problem, fix it, and
            track the customers it brings in.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
