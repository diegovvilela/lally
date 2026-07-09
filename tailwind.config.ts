import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#E72787',
          white: '#FFFFFF',
          black: '#000000',
          ice: '#C6C6C6'
        },
        nebula: {
          900: '#090B12',
          800: '#111421',
          700: '#1A1E2F'
        },
        ink: {
          900: '#14151A',
          700: '#3A3C46',
          500: '#6B6D78'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F7F7F9',
          mist: '#F1EEF1'
        }
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(231, 39, 135, 0.35)',
        'glow-lg': '0 0 80px rgba(231, 39, 135, 0.35)',
        card: '0 1px 2px rgba(20, 21, 26, 0.04), 0 8px 24px -12px rgba(20, 21, 26, 0.12)',
        'card-hover': '0 8px 16px -4px rgba(20, 21, 26, 0.08), 0 16px 32px -12px rgba(231, 39, 135, 0.16)'
      }
    }
  },
  plugins: []
} satisfies Config
