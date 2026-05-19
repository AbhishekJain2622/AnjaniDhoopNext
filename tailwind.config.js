/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f98080',
          500: '#7B1C1C',
          600: '#6B1515',
          700: '#5A1010',
          800: '#3D0B0B',
          900: '#1E0505',
          950: '#0F0202',
        },
        gold: {
          100: '#FFF8E1',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#D4AF37',
          600: '#B8960C',
          700: '#9A7D0A',
          800: '#7D6608',
          900: '#5F4E06',
        },
        saffron: '#FF6B00',
        cream: '#F5EDD6',
        petal: '#E8A4B8',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        body: ['Cormorant Garamond', 'serif'],
        accent: ['Cinzel', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(ellipse at center, #D4AF37 0%, transparent 70%)',
        'radial-maroon': 'radial-gradient(ellipse at center, #7B1C1C 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'smoke': 'smoke 8s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 60px rgba(212, 175, 55, 0.8)' },
        },
        smoke: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0.8' },
          '50%': { transform: 'translateY(-100px) scaleX(1.5)', opacity: '0.4' },
          '100%': { transform: 'translateY(-200px) scaleX(2)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 50px rgba(212, 175, 55, 0.9)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
