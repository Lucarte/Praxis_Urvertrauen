/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './index.html', './src/**/*.html', './src/**/*.js', './src/**/*.php' ],
  theme: {
    fontFamily: {
      'titel': [ 'felt-tip-roman' ],
      'sans': [ 'kaisei-opti', 'nunito', 'Helvetica' ]
    },
    extend: {
      boxShadow: {
        'shadowHeader': '1px 3px 10px rgba(168, 187, 182, 1)',
        'shadowMenu': '1px 3px -1px rgba(157, 157, 182, .6)',
        'shadowSubmenu': '1px 3px 15px rgba(168, 187, 182, .6)'
      }
    },
    fontWeight: {
      'light': 300,
      'regular': 400,
      'bold': 700,
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

