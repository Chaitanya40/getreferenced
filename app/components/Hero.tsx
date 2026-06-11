import { LogoMark } from "./Logo";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid">
      <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-brand-green/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-brand-teal/10 blur-3xl" />

      <div className="container-px relative grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            SEO + AI search for Hyderabad businesses
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Get found by more customers — on{" "}
            <span className="text-gradient">Google &amp; AI search</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Whether your next customer searches Google, opens Maps, or asks
            ChatGPT for a recommendation, we make sure your business{" "}
            <span className="font-semibold text-ink">shows up</span>. More
            visibility, more inquiries, more business.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Get my free visibility audit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#how" className="btn-ghost">
              See how it works
            </a>
          </div>

          <p className="mt-3 text-sm text-ink-muted">
            Free. No obligation. See exactly where you&rsquo;re losing customers.
          </p>

          <ul className="mt-10 grid max-w-lg gap-3.5">
            {[
              {
                t: "Show up where buyers look now",
                d: "Google, Maps, and AI tools like ChatGPT, Gemini & Perplexity.",
              },
              {
                t: "Turn searches into inquiries",
                d: "More calls, WhatsApp messages, and walk-ins — not just traffic.",
              },
              {
                t: "Stay ahead of competitors",
                d: "Most local businesses aren’t ready for AI search yet. Get there first.",
              },
            ].map((b) => (
              <li key={b.t} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm leading-snug text-ink-muted">
                  <span className="font-semibold text-ink">{b.t}</span> — {b.d}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Simulated AI answer with a citation to the brand */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rounded-[28px] bg-brand-gradient opacity-[0.08] blur-2xl" />
            <div className="card relative overflow-hidden">
              <div className="flex items-center gap-2 border-b border-ink/[0.06] pb-4">
                <LogoMark className="h-6 w-6" />
                <span className="text-sm font-semibold text-ink-soft">AI Answer</span>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-brand-gradient-soft px-2.5 py-1 text-[11px] font-semibold text-brand-deep">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
                  Live
                </span>
              </div>

              <p className="mt-4 text-sm font-medium text-ink-muted">
                &ldquo;Who&rsquo;s the best{" "}
                <span className="text-ink">[your service]</span> in Hyderabad?&rdquo;
              </p>

              <div className="mt-4 space-y-2.5">
                <div className="h-2.5 w-full rounded-full bg-ink/[0.06]" />
                <div className="h-2.5 w-[92%] rounded-full bg-ink/[0.06]" />
                <div className="h-2.5 w-[76%] rounded-full bg-ink/[0.06]" />
              </div>

              <div className="mt-5 rounded-xl border border-brand-teal/25 bg-brand-gradient-soft p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white">
                    1
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Your Brand is widely recommended for this.
                    </p>
                    <p className="mt-1 text-xs text-ink-muted">
                      Cited as a top source across multiple answers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[11px] text-ink-muted">
                <span>Sources:</span>
                <span className="rounded-md bg-mist px-2 py-1 font-medium text-brand-deep">
                  yourbrand.com
                </span>
                <span className="rounded-md bg-mist px-2 py-1">+4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
