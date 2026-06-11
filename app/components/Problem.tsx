export function Problem() {
  return (
    <section className="container-px py-20 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Why now</span>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          The way people search is changing fast
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          More buyers are asking ChatGPT and Google&rsquo;s AI{" "}
          <span className="font-semibold text-ink">&ldquo;who&rsquo;s the best
          [your service] in Hyderabad?&rdquo;</span> — and getting one or two
          recommendations, not a page of ten. If your business isn&rsquo;t set up
          to be that recommendation, your competitor will be. It&rsquo;s far
          easier to get ahead today than to catch up later.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          {
            t: "Fewer clicks, fewer chances",
            d: "AI now answers the question directly, so customers see only a couple of businesses. If you’re not one of them, you’re invisible.",
          },
          {
            t: "Competitors get recommended",
            d: "AI confidently names a handful of businesses per question. Right now, that may not include you.",
          },
          {
            t: "You can’t see what’s said",
            d: "Without tracking, you have no idea whether AI is recommending you, ignoring you, or sending customers elsewhere.",
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
