/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/html/mehr.html', './src/html/angebot.html', './src/html/uebermich.html'],
  // content: ['./src/*.html'],
  theme: {
    extend: {},
    colors: {
      veryDarkBrown: '#412f20',
      darkBrown: '#7e5e45',
      lightBrown: '#c4a892',
      brownTransparent: 'rgba(196, 168, 146, .5)',
      green: '#889830',
      lightTurquis: '#d7e6e7',
      darkTurquis: '#c0d5d6',
      fontLight: '#c0d5d6',
    },
  },
  plugins: [],
}

