const points = [
  {
    t: "First-mover advantage",
    d: "GEO is where SEO was in 2004. The brands that get cited now will compound that authority while competitors are still waking up.",
  },
  {
    t: "Built for how models think",
    d: "We optimize for retrieval, grounding, and trust signals — not keyword stuffing. Our work is designed around how LLMs actually choose sources.",
  },
  {
    t: "Measurable, not mystical",
    d: "Share of AI voice, citation frequency, sentiment, and competitive gaps — reported in plain numbers you can act on.",
  },
  {
    t: "Compounds with your SEO",
    d: "GEO and SEO reinforce each other. The authority and structure we build lifts both your AI citations and your traditional rankings.",
  },
];

export function Why() {
  return (
    <section id="why" className="bg-mist/60 py-20 lg:py-28">
      <div className="container-px grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Why GEO, why now</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            The brands AI recommends will own the next decade
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Being mentioned in an AI answer isn&rsquo;t a vanity metric — it&rsquo;s
            the new shelf space. When a model names you as the answer, you arrive
            pre-trusted, ahead of the competition, at the moment of intent.
          </p>
          <div className="mt-8">
            <a href="#contact" className="btn-primary">
              Start with a free audit
            </a>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.t} className="card">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
