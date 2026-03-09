import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#0F1F1A',
          800: '#183129',
          700: '#21453A',
          600: '#2C5B4D',
          500: '#3D7866',
        },
        amber: {
          600: '#C34A12',
          500: '#E25B18',
          400: '#F2742F',
          300: '#F79255',
        },
        surface: {
          50: '#F6F1EC',
          100: '#EFE7DF',
          200: '#E4D7C9',
          300: '#D5C3AF',
        },
      },


      fontFamily: {
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['var(--font-body)', 'DM Sans', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 5vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'h1': ['clamp(2.25rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.75rem, 2.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h3': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 8rem)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        'card': '0 1px 4px rgba(15,31,26,0.04)',
        'card-hover': '0 8px 32px rgba(15,31,26,0.08)',
        'cta': '0 4px 24px rgba(226,91,24,0.35)',
        'cta-hover': '0 6px 32px rgba(226,91,24,0.45)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        bobble: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease forwards',
        'pulse-dot': 'pulse-dot 2s ease infinite',
        'bobble': 'bobble 2s ease-in-out infinite',
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
