/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx}", "./src/**/*.{js,jsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        mainBG: '#151A23',
        secondAccent: '#1F242C',
        greenColor: '#A7E92F'
      }
    },
  },
  plugins: [],
}