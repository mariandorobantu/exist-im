import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#ffffff",
        "bg-alt": "#faf9f7",
        ink: {
          DEFAULT: "#141413",
          2: "#3a3a37",
          3: "#78766f",
          4: "#b5b3ab",
        },
        line: {
          DEFAULT: "#e8e6df",
          2: "#f0eee7",
        },
        // Editorial oxblood accent — used only on the "." in the logo,
        // one word in the essay title, and the essay CTA underline.
        accent: {
          DEFAULT: "#c1121f",
          soft: "#a01019",
        },
      },
      fontFamily: {
        // Serif display — Fraunces variable font (editorial, optical sizing,
        // closest open-source cousin to Copernicus/Söhne Halbfett).
        serif: [
          "var(--font-fraunces)",
          "Copernicus",
          "Fraunces",
          "Georgia",
          "serif",
        ],
        // Sans — Inter Tight for body & UI (tight tracking, Anthropic-like feel).
        sans: [
          "var(--font-inter-tight)",
          "Söhne",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.032em",
        tight: "-0.018em",
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      maxWidth: {
        container: "1280px",
        prose: "68ch",
      },
      spacing: {
        "18": "4.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
