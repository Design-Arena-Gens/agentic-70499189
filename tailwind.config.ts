import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"]
      },
      colors: {
        surface: "#040308",
        accent: "#6C63FF",
        secondary: "#58d6ff",
        subtle: "#101828"
      },
      boxShadow: {
        glow: "0 0 50px rgba(108, 99, 255, 0.45)"
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(90deg, rgba(140, 155, 255, 0.08) 1px, transparent 0), linear-gradient(rgba(140, 155, 255, 0.08) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
