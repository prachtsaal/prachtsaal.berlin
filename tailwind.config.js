/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        prachtsaal: ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}

