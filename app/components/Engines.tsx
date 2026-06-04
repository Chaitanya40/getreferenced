const engines = [
  "ChatGPT",
  "Perplexity",
  "Google AI Overviews",
  "Gemini",
  "Microsoft Copilot",
  "Claude",
];

export function Engines() {
  return (
    <section className="border-y border-ink/[0.06] bg-mist/60">
      <div className="container-px py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
          We optimize your visibility across every major answer engine
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {engines.map((e) => (
            <span
              key={e}
              className="text-base font-semibold text-ink/45 transition-colors hover:text-ink"
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
