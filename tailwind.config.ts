import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens map to CSS variables in app/globals.css
        evergreen: "var(--evergreen)",
        "evergreen-dark": "var(--evergreen-dark)",
        cream: "var(--cream)",
        "soft-white": "var(--soft-white)",
        clay: "var(--clay)",
        "clay-dark": "var(--clay-dark)",
        ink: "var(--ink)",
        taupe: "var(--taupe)",
        line: "var(--line)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
