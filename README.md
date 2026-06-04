# GetReferenced.co

> **Win the AI Search Era.** Marketing site for GetReferenced.co — a Generative
> Engine Optimization (GEO) company that helps brands get cited and recommended
> by ChatGPT, Perplexity, Gemini, Microsoft Copilot, and Google AI Overviews.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS** —
ready to deploy on **Vercel**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repo to GitHub (done).
2. In Vercel, **Add New → Project** and import the repository.
3. Framework preset auto-detects **Next.js** — no config needed.
4. Deploy, then add the custom domain **getreferenced.co** under
   **Settings → Domains**.

## Structure

```
app/
  layout.tsx          # Metadata, fonts, JSON-LD (Organization, WebSite, Service)
  page.tsx            # Landing page composition
  globals.css         # Tailwind layers + brand utilities
  robots.ts           # robots.txt (AI crawlers explicitly allowed)
  sitemap.ts          # sitemap.xml
  components/          # Nav, Hero, Engines, Problem, Process, Services, Why, FAQ, CTA, Footer
public/
  logo.png            # Brand logo (OG image + apple-touch icon)
  icon.svg            # Favicon (speech bubble + sparkle mark)
  llms.txt            # Machine-readable brand summary for AI crawlers
```

## SEO / GEO built in

- Full Open Graph + Twitter metadata
- JSON-LD structured data: Organization, WebSite, Service, FAQPage
- `robots.txt` welcoming major AI crawlers (GPTBot, PerplexityBot, etc.)
- `sitemap.xml` and `llms.txt`
- Semantic HTML, fast static rendering

## Contact

Update the contact email (`hello@getreferenced.co`) in
`app/components/CTA.tsx` and `app/components/Footer.tsx` if needed.
