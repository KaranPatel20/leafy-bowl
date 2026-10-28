/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        linen: '#F7F3E8',
        card: '#FFFDF8',
        pine: '#2E3A33',
        sage: { DEFAULT: '#A9C0A6', mist: '#DCE6D9' },
        butter: '#F2D27A',
        clay: { DEFAULT: '#B5654A', deep: '#A4553B' },
        ink: { muted: '#4A564E' },
        rule: '#C9CFC4',
        veg: '#3B7D2E',
      },
      fontFamily: {
        sans: ['var(--font-bricolage)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-instrument)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
