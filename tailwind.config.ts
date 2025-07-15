import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: '#0a0a0a',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        foregroundReverse: "var(--background)",
        backgroundReverse: "var(--foreground)",
      },
      screens: {
        'sm1': '630px',
        'md1': '900px',
        'md2': '1000px',
        'md3': '1200px',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
