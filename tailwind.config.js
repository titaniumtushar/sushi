/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          900: '#0A0A0F',
          800: '#121218',
          700: '#1A1A23',
          600: '#25252E',
        },
        'primary': {
          500: '#6C63FF',
          600: '#5A52E0',
          700: '#4A43C8',
        },
        'secondary': {
          500: '#4ECDC4',
          600: '#33B3AA',
          700: '#219E95',
        },
        'accent': {
          500: '#FF6B6B',
          600: '#E05555',
          700: '#C74444',
        },
        'success': {
          500: '#2ECC71',
          600: '#27AE60',
          700: '#1F8B4C',
        },
        'warning': {
          500: '#F39C12',
          600: '#D68910',
          700: '#B8770D',
        },
        'error': {
          500: '#E74C3C',
          600: '#C0392B',
          700: '#A52A2A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}