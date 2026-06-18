import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E1C576",
          dark: "#A38637",
          muted: "rgba(201,168,76,0.15)",
        },
        ink: {
          950: "#1C1E2D", /* Dark Navy */
          900: "#2B2C42", /* Deep Dark Blue */
          800: "#3B3C51", /* Muted Slate */
          700: "#4B4C63", 
          600: "#5D5E78", 
          500: "#757691", 
          400: "#A3A4B8", 
          300: "#C2C3D1", 
          200: "#E2E3EB", 
          100: "#F1F2F6", 
          50:  "#F8FAFC", /* Very Light Grey */
        },
        sand: "#F8FAFC",
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0% center" },
          to:   { backgroundPosition: "200% center" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
      },
      animation: {
        shimmer:  "shimmer 4s linear infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        "fade-in": "fade-in 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
