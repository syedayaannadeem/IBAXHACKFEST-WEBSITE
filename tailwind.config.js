/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#030014',
        'bg-secondary': '#0B0F2A',
        'violet': {
          600: '#7C3AED',
          500: '#8B5CF6',
          400: '#A78BFA',
        },
        'pink': {
          500: '#EC4899',
          400: '#F472B6',
        },
        'indigo': {
          600: '#4F46E5',
          500: '#6366F1',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': `linear-gradient(rgba(124, 58, 237, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124, 58, 237, 0.08) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '64px 64px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      boxShadow: {
        'glow-violet': '0 0 40px rgba(124, 58, 237, 0.4)',
        'glow-pink': '0 0 40px rgba(236, 72, 153, 0.4)',
        'glow-sm': '0 0 20px rgba(124, 58, 237, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
