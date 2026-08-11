import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0E1A",
        indigo: "#171238",
        copper: "#C1631B",
        "copper-light": "#E2924A",
        paper: "#F5F3EC",
        ink: "#12141C",
        line: "#5C6B8A",
        "line-soft": "rgba(92, 107, 138, 0.28)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      backgroundImage: {
        "orbit-fade":
          "radial-gradient(120% 120% at 50% 0%, rgba(92,107,138,0.16) 0%, rgba(10,14,26,0) 55%)",
      },
      keyframes: {
        "orbit-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "orbit-spin-slow": "orbit-spin 90s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
