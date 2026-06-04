import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://getreferenced.co";

export const viewport: Viewport = {
  themeColor: "#155A6B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "GetReferenced.co",
  title: {
    default: "GetReferenced.co — Win the AI Search Era",
    template: "%s | GetReferenced.co",
  },
  description:
    "GetReferenced.co helps brands get cited and recommended by ChatGPT, Perplexity, Gemini, and Google AI Overviews. Generative Engine Optimization (GEO) that turns AI answers into your best growth channel.",
  category: "Marketing",
  keywords: [
    "Generative Engine Optimization",
    "GEO",
    "AI search optimization",
    "ChatGPT SEO",
    "Perplexity optimization",
    "Google AI Overviews",
    "AI citations",
    "answer engine optimization",
    "AEO",
    "brand visibility in AI",
    "LLM optimization",
    "AI mention monitoring",
  ],
  authors: [{ name: "GetReferenced.co", url: SITE_URL }],
  creator: "GetReferenced.co",
  publisher: "GetReferenced.co",
  formatDetection: { email: false, telephone: false, address: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "GetReferenced.co",
    locale: "en_US",
    title: "GetReferenced.co — Win the AI Search Era",
    description:
      "Get your brand cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews. Generative Engine Optimization that makes AI recommend you.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GetReferenced.co — Win the AI Search Era",
    description:
      "Generative Engine Optimization (GEO) to get your brand cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/logo.png",
  },
  // Add your Search Console token here once verified:
  // verification: { google: "<token>" },
};

/**
 * A single linked-data graph. Using shared @id references lets search engines
 * and AI models resolve the entities (Organization ↔ WebSite ↔ Service ↔
 * WebPage) as one coherent knowledge graph — a strong GEO/entity-SEO signal.
 */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "GetReferenced.co",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 1254, height: 1254 },
      image: `${SITE_URL}/logo.png`,
      description:
        "Generative Engine Optimization (GEO) agency that helps brands get cited and recommended by AI search engines including ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
      slogan: "Win the AI Search Era",
      email: "hello@getreferenced.co",
      areaServed: { "@type": "Place", name: "Worldwide" },
      knowsAbout: [
        "Generative Engine Optimization",
        "Answer Engine Optimization",
        "AI search visibility",
        "Search Engine Optimization",
        "Structured data",
        "Entity SEO",
        "AI mention monitoring",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@getreferenced.co",
        contactType: "sales",
        availableLanguage: ["English"],
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "GetReferenced.co",
      description: "Win the AI Search Era with Generative Engine Optimization.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "GetReferenced.co — Win the AI Search Era",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: `${SITE_URL}/logo.png`,
      description:
        "Generative Engine Optimization (GEO) that gets your brand cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      serviceType: "Generative Engine Optimization (GEO)",
      name: "Generative Engine Optimization",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Place", name: "Worldwide" },
      description:
        "Make AI search engines cite, recommend, and reference your brand. Includes AI visibility audits, citation-ready content, entity and schema optimization, authority building, and ongoing AI mention monitoring.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "GEO Services",
        itemListElement: [
          "AI Visibility Audit",
          "Citation-Ready Content",
          "Entity & Schema Optimization",
          "Authority & Mention Building",
          "AI Mention Monitoring",
          "llms.txt & AI Readiness",
        ].map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s },
        })),
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
