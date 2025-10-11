import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // AGGRESSIVE Fluid Typography - Lebih terlihat perbedaannya
      fontSize: {
        // Format: clamp(min at mobile, viewport formula, max at 4K)
        // Rumus: Gunakan vw yang lebih besar untuk scaling lebih agresif
        "fluid-xs": "clamp(0.75rem, 0.5rem + 0.65vw, 1.5rem)",
        "fluid-sm": "clamp(0.875rem, 0.6rem + 0.85vw, 1.75rem)",
        "fluid-base": "clamp(1rem, 0.7rem + 1vw, 2rem)",
        "fluid-lg": "clamp(1.125rem, 0.75rem + 1.25vw, 2.5rem)",
        "fluid-xl": "clamp(1.25rem, 0.8rem + 1.5vw, 3rem)",
        "fluid-2xl": "clamp(1.5rem, 0.9rem + 2vw, 4rem)",
        "fluid-3xl": "clamp(1.875rem, 1rem + 3vw, 6rem)",
        "fluid-4xl": "clamp(2.25rem, 1.2rem + 4vw, 8rem)",
        "fluid-5xl": "clamp(3rem, 1.5rem + 5vw, 10rem)",
        "fluid-6xl": "clamp(3.75rem, 2rem + 6vw, 12rem)",
        "fluid-7xl": "clamp(4.5rem, 2.5rem + 7vw, 14rem)",
        "fluid-8xl": "clamp(6rem, 3rem + 10vw, 18rem)",
      },
      // AGGRESSIVE Fluid Spacing
      spacing: {
        "fluid-1": "clamp(0.25rem, 0.1rem + 0.5vw, 1rem)",
        "fluid-2": "clamp(0.5rem, 0.2rem + 1vw, 2rem)",
        "fluid-3": "clamp(0.75rem, 0.3rem + 1.5vw, 3rem)",
        "fluid-4": "clamp(1rem, 0.5rem + 2vw, 4rem)",
        "fluid-5": "clamp(1.25rem, 0.6rem + 2.5vw, 5rem)",
        "fluid-6": "clamp(1.5rem, 0.8rem + 3vw, 6rem)",
        "fluid-8": "clamp(2rem, 1rem + 4vw, 8rem)",
        "fluid-10": "clamp(2.5rem, 1.5rem + 5vw, 10rem)",
        "fluid-12": "clamp(3rem, 2rem + 5vw, 12rem)",
        "fluid-16": "clamp(4rem, 2.5rem + 7vw, 16rem)",
        "fluid-20": "clamp(5rem, 3rem + 8vw, 20rem)",
        "fluid-24": "clamp(6rem, 4rem + 10vw, 24rem)",
      },
      // Container tanpa max-width (full fluid)
      maxWidth: {
        "container-full": "100%",
        "container-xl": "1920px",
        "container-2xl": "2560px",
      },
      colors: {
        blacked: "#121212",
      },
    },
  },
  plugins: [],
};

export default config;
