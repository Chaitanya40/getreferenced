import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://getreferenced.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GetReferenced.co — Win the AI Search Era",
    template: "%s | GetReferenced.co",
  },
  description:
    "GetReferenced.co helps brands get cited and recommended by ChatGPT, Perplexity, Gemini, and Google AI Overviews. Generative Engine Optimization (GEO) that turns AI answers into your best growth channel.",
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
  ],
  authors: [{ name: "GetReferenced.co" }],
  creator: "GetReferenced.co",
  publisher: "GetReferenced.co",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "GetReferenced.co",
    title: "GetReferenced.co — Win the AI Search Era",
    description:
      "Get your brand cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews. Generative Engine Optimization that makes AI recommend you.",
    images: [
      {
        url: "/logo.png",
        width: 1254,
        height: 1254,
        alt: "GetReferenced.co — Win the AI Search Era",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GetReferenced.co — Win the AI Search Era",
    description:
      "Generative Engine Optimization (GEO) to get your brand cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/logo.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GetReferenced.co",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Generative Engine Optimization (GEO) agency that helps brands get cited and recommended by AI search engines including ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
  slogan: "Win the AI Search Era",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GetReferenced.co",
  url: SITE_URL,
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Generative Engine Optimization (GEO)",
  provider: { "@type": "Organization", name: "GetReferenced.co", url: SITE_URL },
  areaServed: "Worldwide",
  description:
    "Make AI search engines cite, recommend, and reference your brand. Includes AI visibility audits, content and entity optimization, structured data, and ongoing AI mention monitoring.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
