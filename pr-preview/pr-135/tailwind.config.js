/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '_posts/**/*.html',
    '*.html',
    '*.md',
  ],
  theme: {
    extend: {
      fontFamily: {
        prachtsaal: ['Outfit']
      }
    },
  },
  plugins: [],
}

