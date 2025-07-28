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
        DEFAULT: "var(--foreground)",
        borderReverse: "var(--background)",
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
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 30s linear infinite',
        typing: "typing 30s",
        wiggle: 'wiggle 1s ease-in-out infinite',
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) 3s infinite',
        wave: 'wave 1.2s ease-in-out infinite',
        shoot: 'shoot 4s linear forwards',
        "text-reveal": "text-reveal 4s cubic-bezier(0.77, 0, 0.175, 1) forwards",
        expand: 'expand 4s ease forwards',

      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },

        'infinite-scroll-reverse': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0%)' },
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
        wave: {
          '0%, 40%, 100%': { transform: 'scaleY(0.4)' },
          '20%': { transform: 'scaleY(1)' },
        },
        shoot: {
          '0%': { left: '0%', top: '0%' },
          '100%': { left: '100%', top: '0%' },
        },
        'text-reveal': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        expand: {
          '0%': { height: '0px', opacity: '1' },
          '100%': {
            height: '100%', opacity: '1',
            bottom: '0',
            left: '0',
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