const bundles = [
  {
    name: "GEO Starter",
    price: "₹4,999",
    note: "one-time",
    tagline: "Get machine-readable, fast.",
    features: [
      "LocalBusiness schema markup",
      "llms.txt for AI crawlers",
      "robots.txt tuned for GPTBot, PerplexityBot & co.",
      "Meta titles & descriptions rewritten",
      "XML sitemap + Search Console submission",
    ],
    popular: false,
  },
  {
    name: "Local Visibility Pack",
    price: "₹7,999",
    note: "one-time",
    tagline: "Own the local map pack.",
    features: [
      "Full Google Business Profile optimization",
      "NAP & citation consistency cleanup",
      "Review-generation system (QR + link + flow)",
      "Directory listings — JustDial, Practo, Bing, Apple",
    ],
    popular: true,
  },
  {
    name: "Complete GEO Launch",
    price: "₹14,999",
    note: "one-time",
    tagline: "The full foundation, in one go.",
    features: [
      "Everything in GEO Starter",
      "Everything in Local Visibility Pack",
      "2 citation-ready service / FAQ pages",
      "Full schema + AI-readiness across the site",
    ],
    popular: false,
  },
];

const retainers = [
  {
    name: "Maintain & Monitor",
    price: "₹3,000",
    features: [
      "AI-visibility tracking",
      "Monthly GBP posts",
      "Review responses",
      "1 report / month",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹7,500",
    features: [
      "Everything in Maintain & Monitor",
      "Ongoing citation-ready content",
      "New citations every month",
      "Continuous optimization",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "₹15,000",
    features: [
      "Everything in Growth",
      "Multi-location coverage",
      "Aggressive review building",
      "Rank & AI-mention tracking",
    ],
    popular: false,
  },
];

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      className="mt-0.5 shrink-0 text-brand-green"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="container-px py-20 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Pricing</span>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Simple, fixed-price packages
        </h2>
        <p className="mt-5 text-lg text-ink-muted">
          Start with a one-time foundation, then keep your edge with a monthly
          plan. No lock-ins, no surprises.
        </p>
      </div>

      {/* Founding-client offer banner */}
      <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl bg-brand-gradient p-px shadow-glow">
        <div className="flex flex-col items-center gap-4 rounded-[15px] bg-white px-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
              Founding client offer
            </p>
            <p className="mt-2 text-lg font-semibold text-ink">
              Free <span className="text-gradient">GEO Starter</span> (worth
              ₹4,999) for the first 5 local businesses
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              In exchange for a quick testimonial once you see the results. No
              catch, no retainer.
            </p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            Claim a spot
          </a>
        </div>
      </div>

      {/* One-time bundles */}
      <h3 className="mt-16 text-center text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
        One-time foundations
      </h3>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {bundles.map((b) => (
          <div
            key={b.name}
            className={`card flex flex-col ${
              b.popular
                ? "border-brand-teal/40 shadow-glow ring-1 ring-brand-teal/30"
                : ""
            }`}
          >
            {b.popular && (
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </span>
            )}
            <h4 className="text-lg font-semibold text-ink">{b.name}</h4>
            <p className="mt-1 text-sm text-ink-muted">{b.tagline}</p>
            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="text-3xl font-bold tracking-tight text-ink">
                {b.price}
              </span>
              <span className="text-sm text-ink-muted">{b.note}</span>
            </div>
            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {b.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-ink-soft">
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-7 ${b.popular ? "btn-primary" : "btn-ghost"}`}
            >
              Get started
            </a>
          </div>
        ))}
      </div>

      {/* Monthly retainers */}
      <h3 className="mt-16 text-center text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
        Monthly plans
      </h3>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {retainers.map((r) => (
          <div
            key={r.name}
            className={`card flex flex-col ${
              r.popular
                ? "border-brand-teal/40 shadow-glow ring-1 ring-brand-teal/30"
                : ""
            }`}
          >
            {r.popular && (
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </span>
            )}
            <h4 className="text-lg font-semibold text-ink">{r.name}</h4>
            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="text-3xl font-bold tracking-tight text-ink">
                {r.price}
              </span>
              <span className="text-sm text-ink-muted">/ month</span>
            </div>
            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {r.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-ink-soft">
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-7 ${r.popular ? "btn-primary" : "btn-ghost"}`}
            >
              Choose plan
            </a>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-ink-muted">
        Need just one piece — schema, GBP cleanup, or a hacked-site fix? À la
        carte services are available on request.
      </p>
    </section>
  );
}
