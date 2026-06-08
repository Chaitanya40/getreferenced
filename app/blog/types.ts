export type FaqItem = { q: string; a: string };

export type PostCategory = "Business" | "Technical" | "Strategy";

export type PostMeta = {
  /** URL slug — also the canonical path: /blog/<slug> */
  slug: string;
  /** H1 + <title> (keep the primary keyword near the front) */
  title: string;
  /** Meta description — 150–160 chars, primary keyword included */
  description: string;
  /** Short card/listing summary */
  excerpt: string;
  /** ISO date, e.g. "2026-06-08" */
  date: string;
  /** ISO date of last meaningful update (optional) */
  updated?: string;
  category: PostCategory;
  tags: string[];
  /** e.g. "8 min read" */
  readingTime: string;
  /** Extra keywords for <meta keywords> / topical signal */
  keywords?: string[];
  /** Rendered as an on-page FAQ + FAQPage JSON-LD */
  faqs?: FaqItem[];
};
