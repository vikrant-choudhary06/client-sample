import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FCFBF9",
          100: "#F8F5EE",
          200: "#EFECE1",
          300: "#E3DDD0",
        },
        charcoal: {
          900: "#121212",
          850: "#181716",
          800: "#22201E",
          700: "#322F2C",
        },
        brass: {
          400: "#D4B483",
          500: "#C5A880",
          600: "#AD8B5A",
          700: "#8C6A3C",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        slideDown: "slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        pulseSubtle: "pulseSubtle 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
