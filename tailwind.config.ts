/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14b8a6', // Teal
          dark: '#0d9488',
          light: '#2dd4bf',
        },
        secondary: {
          DEFAULT: '#06b6d4', // Cyan
          dark: '#0891b2',
          light: '#22d3ee',
        },
        dark: {
          bg: '#0a0f1c', // Very dark blue
          surface: '#1e293b',
          card: '#0f172a',
          text: '#f8fafc',
          border: '#334155',
        },
        accent: {
          teal: '#14b8a6',
          cyan: '#06b6d4',
          green: '#10b981',
        }
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(20, 184, 166, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(20, 184, 166, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};