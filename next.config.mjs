/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // RFC 8288 Link headers: point agents at our machine-readable resources.
        // rel values (describedby, sitemap, alternate) are IANA-registered.
        source: "/",
        headers: [
          {
            key: "Link",
            value: [
              '</llms.txt>; rel="describedby"; type="text/plain"',
              '</sitemap.xml>; rel="sitemap"; type="application/xml"',
              '</>; rel="alternate"; type="text/markdown"',
            ].join(", "),
          },
          // The homepage is content-negotiated (HTML vs text/markdown), so caches
          // must key on Accept. See middleware.ts.
          { key: "Vary", value: "Accept" },
        ],
      },
      {
        // Let AI crawlers and browsers cache the machine-readable brand summary.
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;
