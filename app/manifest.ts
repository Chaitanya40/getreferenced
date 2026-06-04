import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GetReferenced.co — Win the AI Search Era",
    short_name: "GetReferenced",
    description:
      "Generative Engine Optimization (GEO) that gets your brand cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#155A6B",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/logo.png", sizes: "1254x1254", type: "image/png", purpose: "maskable" },
    ],
  };
}
