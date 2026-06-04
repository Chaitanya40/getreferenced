import { ContactForm } from "./ContactForm";

const trustPoints = [
  "A benchmark of how AI engines answer your buyers’ questions today",
  "Your share of AI voice versus competitors",
  "The top opportunities to start getting referenced",
];

export function CTA() {
  return (
    <section id="contact" className="container-px pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-12 shadow-glow sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              See where you stand in AI search
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Get a free AI visibility audit. We&rsquo;ll show you exactly how
              ChatGPT, Perplexity, Gemini, and AI Overviews answer your
              buyers&rsquo; questions today.
            </p>

            <ul className="mx-auto mt-7 max-w-md space-y-3 text-left lg:mx-0">
              {trustPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-white/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <p className="mt-7 text-sm text-white/70">
              Prefer email?{" "}
              <a href="mailto:hello@getreferenced.co" className="font-semibold text-white underline-offset-2 hover:underline">
                hello@getreferenced.co
              </a>
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
