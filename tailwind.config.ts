import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pulled from the GetReferenced.co logo gradient + wordmark
        ink: {
          DEFAULT: "#0E2A33",
          soft: "#1B3A43",
          muted: "#5B7079",
        },
        brand: {
          green: "#21B07C",
          teal: "#1E7488",
          deep: "#155A6B",
        },
        mist: "#F5F9F8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(110deg, #2BC08C 0%, #1E8E94 52%, #155A6B 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(43,192,140,0.12) 0%, rgba(21,90,107,0.12) 100%)",
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(30,116,136,0.45)",
        card: "0 10px 40px -18px rgba(14,42,51,0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
