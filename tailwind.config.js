/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#04BF55',
        secondary: '#262626',
        accent01: '#4AD988',
        accent02: '#7ED9A5',
        background: '#F2F2F2',
      },
    },
  },
  plugins: [],
}
