/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'enfer': 'url("./assets/enfer.jpg")'
      }
    },
  },
  plugins: [],
}

