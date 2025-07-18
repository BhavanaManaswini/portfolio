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
        'xs': '400px',
        'sm1': '630px',
        'md1': '900px',
        'md2': '1000px',
        'md3': '1200px',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        typing: "typing 30s",
        wiggle: 'wiggle 1s ease-in-out infinite',
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
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
        },
        'text-slide': {
          '0%, 16%': {
            transform: 'translateY(0%)',
          },
          '20%, 36%': {
            transform: 'translateY(-16.66%)',
          },
          '40%, 56%': {
            transform: 'translateY(-33.33%)',
          },
          '60%, 76%': {
            transform: 'translateY(-50%)',
          },
          '80%, 96%': {
            transform: 'translateY(-66.66%)',
          },
          '100%': {
            transform: 'translateY(-83.33%)',
          },
        },
      }
    },
  },
  plugins: [],
};
export default config;

// image transform
// class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"