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
  layout.tsx          # Metadata, viewport/theme, linked JSON-LD entity graph
  page.tsx            # Landing page composition
  globals.css         # Tailwind layers + brand utilities
  opengraph-image.tsx # Dynamic 1200x630 branded OG image
  twitter-image.tsx   # Re-uses the OG image for Twitter cards
  manifest.ts         # PWA web manifest
  robots.ts           # robots.txt (AI crawlers explicitly allowed)
  sitemap.ts          # sitemap.xml
  components/          # Nav, Hero, Engines, Problem, Process, Services, Why, FAQ, CTA, Footer
public/
  logo.png            # Brand logo (apple-touch icon)
  icon.svg            # Favicon (speech bubble + sparkle mark)
  llms.txt            # Machine-readable brand summary for AI crawlers
```

## SEO / GEO built in

- Rich metadata: title templates, keywords, canonical, robots (max-snippet/-image-preview)
- Dynamic Open Graph + Twitter card image (`/opengraph-image`)
- Linked JSON-LD **@graph**: Organization/ProfessionalService, WebSite, WebPage,
  Service (with OfferCatalog) — entities cross-referenced via `@id`
- FAQPage structured data for rich results & AI answer extraction
- `robots.txt` welcoming major AI crawlers (GPTBot, PerplexityBot, ClaudeBot, etc.)
- `sitemap.xml`, `llms.txt`, and a PWA `manifest.webmanifest`
- Security headers (HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- Semantic HTML, fast static rendering

### After deploying

1. Add the **getreferenced.co** domain in Vercel.
2. Verify the domain in Google Search Console and paste the token into
   `metadata.verification.google` in `app/layout.tsx`.
3. Submit `https://getreferenced.co/sitemap.xml` in Search Console.
4. Run an audit anytime with the `/seo` skill against the live URL.

## Contact

Update the contact email (`hello@getreferenced.co`) in
`app/components/CTA.tsx` and `app/components/Footer.tsx` if needed.
