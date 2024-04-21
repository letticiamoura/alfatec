/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'estudante': "url('./src/assets/alf.mp4')"
      },
      fontFamily: {
        "sedan": "Sedan, sans-serif"
      }
    },
  },
  plugins: [],
}
