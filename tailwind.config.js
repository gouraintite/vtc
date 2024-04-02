
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {

      colors : {
        greed: '#16DBCC',
        blueone: '#7B9CF6',
        bluestrong: '#184AD2',
      }
      // colors: {
      //   'blue': '#1fb6ff',
      //   'purple': '#7e5bef',
      //   'pink': '#ff49db',
      //   'orange': '#ff7849',
      //   'green': '#13ce66',
      //   'yellow': '#ffc82c',
      //   'gray-dark': '#273444',
      //   'gray': '#8492a6',
      //   'gray-light': '#d3dce6',
      // },
    }
  },
})