/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#1959AC', dark: '#0546D2' },
        copy: '#222222'
      },
      fontFamily: {
        heading: ['"Roboto Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      letterSpacing: { tight2: '-0.02em' }
    }
  },
  plugins: [],
}
