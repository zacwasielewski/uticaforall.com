const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',  
  purge: {
    mode: "all",
    content: [
      //"./**/*.html",
      "./src/**/*.{html,njk}",
    ],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      purple: {
        DEFAULT: '#52128d',
        '50':  '#f9fafb',
        '100': '#eceff9',
        '200': '#dedaf1',
        '300': '#cdb9f6',
        '400': '#b993f0',
        '500': '#a16de4',
        '600': '#894acd',
        '700': '#712bae',
        '800': '#52128d',
        '900': '#200769',
      }
    },
    textIndent: theme => theme('spacing'),
    
    textIndent: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),

    extend: {
      fontFamily: {
        "display": ["raleway", ...defaultTheme.fontFamily.sans],
        "sans": [ "trade-gothic-next", ...defaultTheme.fontFamily.sans],
        "serif": [ "source-serif-4", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-text-indent')(),
  ],
};
