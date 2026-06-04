import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GetReferenced.co — Win the AI Search Era";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Og() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0E2A33 0%, #155A6B 55%, #1E8E94 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path
              d="M32 8C45.255 8 56 17.402 56 29c0 11.598-10.745 21-24 21a27.6 27.6 0 0 1-6.6-.79L14 54l2.2-9.2C11.13 41.06 8 35.4 8 29 8 17.402 18.745 8 32 8Z"
              fill="none"
              stroke="#2BC08C"
              strokeWidth="3.4"
            />
            <rect x="20" y="24" width="18" height="3.6" rx="1.8" fill="#ffffff" />
            <rect x="20" y="31" width="22" height="3.6" rx="1.8" fill="#7FE3C0" />
            <rect x="20" y="38" width="13" height="3.6" rx="1.8" fill="#ffffff" />
            <path
              d="M47 16.5l1.6 4.3 4.3 1.6-4.3 1.6L47 28.3l-1.6-4.3-4.3-1.6 4.3-1.6L47 16.5Z"
              fill="#2BC08C"
            />
          </svg>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#fff" }}>
            Get
            <span style={{ color: "#5FD6AB" }}>Referenced</span>
            <span style={{ color: "#9FB6BD" }}>.co</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Win the AI search era.
          </div>
          <div style={{ fontSize: 32, color: "#BFD6DB", maxWidth: 900, lineHeight: 1.3 }}>
            Get cited by ChatGPT, Perplexity, Gemini &amp; Google AI Overviews.
          </div>
        </div>

        {/* Footer chip */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#0E2A33",
              background: "#5FD6AB",
              padding: "10px 22px",
              borderRadius: "999px",
            }}
          >
            Generative Engine Optimization
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
