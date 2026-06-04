const faqs = [
  {
    q: "What is Generative Engine Optimization (GEO)?",
    a: "GEO is the practice of optimizing your brand, content, and digital signals so that AI answer engines — like ChatGPT, Perplexity, Gemini, and Google AI Overviews — cite and recommend you when people ask relevant questions. Where SEO optimizes for ranking in a list of links, GEO optimizes for being included in the answer itself.",
  },
  {
    q: "How is GEO different from SEO?",
    a: "SEO aims to rank pages in search results; GEO aims to get your brand quoted inside AI-generated answers. They overlap — strong content and authority help both — but GEO adds new levers: citation-ready passage structure, entity and schema clarity, llms.txt and AI crawler access, and off-site trust signals that influence how models choose sources.",
  },
  {
    q: "Which AI engines do you optimize for?",
    a: "We focus on the engines your customers actually use, including ChatGPT, Perplexity, Google AI Overviews, Gemini, and Microsoft Copilot. The exact mix is tailored to your audience and industry after the initial audit.",
  },
  {
    q: "Can you actually measure AI visibility?",
    a: "Yes. We benchmark how frequently you're mentioned, how you're described, the sentiment, and your share of voice versus competitors across a defined set of buyer questions — then track those metrics over time so you can see the impact of the work.",
  },
  {
    q: "How long does it take to see results?",
    a: "Some wins — like fixing AI crawler access, structured data, and citation-ready content — can influence answers within weeks. Authority and mention-building compound over months. We set a clear baseline up front so progress is always visible.",
  },
  {
    q: "What does it cost?",
    a: "Engagements are scoped to your goals and competitive landscape. The best starting point is a free AI visibility audit — it shows where you stand today and what a GEO program would prioritize, with no commitment.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FAQ() {
  return (
    <section id="faq" className="container-px py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 divide-y divide-ink/[0.08]">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink">
                {f.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mist text-brand-deep transition-transform duration-200 group-open:rotate-45">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
