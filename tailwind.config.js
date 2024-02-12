/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c48c46",
        secondary:"#0F1015",
        tertiary:"#20212C",
        quaternary:"#0AD98E"
      },
      fontFamily:{
        inter: "'Inter', sans-serif",
        satisfy: "'Satisfy', cursive;",
      }
    },
  },
  plugins: [],
}