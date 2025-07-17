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
        typing: "typing 30s",
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        wiggle: {
          "0%": {
            transform: "rotate(-3deg)"
          },
          "50%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(-3deg)"
          },
        }
      }
    },
  },
  plugins: [],
};
export default config;
