/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/html/mehr.html', './src/html/angebot.html', './src/html/uebermich.html'],
  // content: ['./src/*.html'],
  theme: {
    fontFamily: {
      'titel': ['felt-tip-roman'],
      'sans': ['kaisei-opti', 'nunito', 'Helvetica']
    },
    extend: {
      boxShadow: {
        'shadowMenu': '1px 3px -1px rgba(157, 157, 182, .6)',
        'shadowSubmenu': '1px 3px 15px rgba(168, 187, 182, .6)'
      }
    },
    colors: {
      veryDarkBrown: '#412f20',
      darkBrown: '#7e5e45',
      lightBrown: '#c4a892',
      brownTransparent: 'rgba(196, 168, 146, .5)',
      green: '#889830',
      lightTurquis: '#d7e6e7',
      darkTurquis: '#c0d5d6',
      fontLight: '#c0d5d6',
      turquisTransparent: 'rgba(168, 187, 182, .5)',
    },
  },
  plugins: [],
}

