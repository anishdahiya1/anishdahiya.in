import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f5ff",
          100: "#e6e9ff",
          200: "#cdd2ff",
          300: "#a3aaff",
          400: "#7b82ff",
          500: "#4f58ff",
          600: "#353cdb",
          700: "#272da8",
          800: "#1d217a",
          900: "#151756"
        }
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Space Grotesk", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};

export default config;
