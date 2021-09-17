const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    mode: "all",
    content: [
      "./**/*.html",
    ],
    options: {
      whitelist: [],
    },
  },
  theme: {
    screens: {
      'xs': '340px',
      'sm': '600px',
      'md': '900px',
      'lg': '1200px',
      'xl': '1480px',
      '2xl': '1800px',
    },
    container: {
      center: true,
      screens: {
        //'xs': 'none',
        //'sm': 'none',
        'md': '900px',
        'lg': '1200px',
        'xl': '1480px',
        '2xl': '1800px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
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
    textIndent: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    extend: {
      fontFamily: {
        "display": ["raleway", ...defaultTheme.fontFamily.sans],
        "sans": [ "proxima-nova", "trade-gothic-next", ...defaultTheme.fontFamily.sans],
        "serif": [ "source-serif-4", ...defaultTheme.fontFamily.serif],
        "ui": [ "trade-gothic-next", ...defaultTheme.fontFamily.sans],
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
