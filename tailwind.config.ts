import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans Flex"', "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        "ag-black": "#1a1a1a",
        "ag-gray-text": "#5f6368",
        "ag-gray-bg": "#f1f3f4",
        "ag-border": "#e8eaed",
        "particle-blue": "#4285f4",
        "particle-purple": "#7b61ff",
        "particle-red": "#ea4335",
        "particle-orange": "#ff9800",
        "particle-yellow": "#fbbc04",
        "particle-green": "#34a853",
        "particle-teal": "#00acc1",
      },
      keyframes: {
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "scroll-x": "scroll-x 25s linear infinite",
        "float-up": "float-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
