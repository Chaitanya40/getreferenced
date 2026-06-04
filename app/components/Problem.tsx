export function Problem() {
  return (
    <section className="container-px py-20 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">The shift</span>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Search didn&rsquo;t die. It started answering.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          People no longer click through a list of links — they ask a question
          and trust the answer. If AI doesn&rsquo;t mention your brand in that
          answer, you&rsquo;re invisible at the exact moment of decision. Classic
          SEO ranks pages. <span className="font-semibold text-ink">GEO gets
          you quoted.</span>
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          {
            t: "Traffic is leaking",
            d: "Zero-click answers now resolve the majority of searches. Your hard-won rankings never get seen.",
          },
          {
            t: "Competitors get cited",
            d: "AI confidently recommends a handful of brands per query. Right now, that may not include you.",
          },
          {
            t: "You can't see it",
            d: "AI answers are personalized and ephemeral. Without monitoring, you have no idea what's being said about you.",
          },
        ].map((c) => (
          <div key={c.t} className="card">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient-soft">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-gradient" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-ink">{c.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
