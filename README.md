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

## Contact form (Web3Forms)

The free-audit form (`app/components/ContactForm.tsx`) submits directly to
[Web3Forms](https://web3forms.com) — no backend or server needed. To make it
live:

1. Go to **web3forms.com**, enter **hello@getreferenced.co**, and you'll be
   emailed a free **access key** instantly (no account required). Submissions
   from the form will be sent to that address.
2. Add the key one of two ways:
   - **Recommended:** in Vercel → **Settings → Environment Variables**, add
     `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = your key, then redeploy. _(Web3Forms
     keys are public by design — safe to expose client-side.)_
   - Or paste it directly into `ACCESS_KEY` at the top of
     `app/components/ContactForm.tsx`.

Until a real key is set, the form renders but submissions will return an error.

The displayed contact email (`hello@getreferenced.co`) also appears in
`app/components/CTA.tsx`, `app/components/Footer.tsx`, `public/llms.txt`, and the
JSON-LD in `app/layout.tsx` — update there if it changes.
