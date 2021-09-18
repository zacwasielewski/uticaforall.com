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
        DEFAULT: 'rgb(82, 18, 141)',
        '50':    'rgb(249, 250, 251)',
        '100':   'rgb(236, 239, 249)',
        '200':   'rgb(222, 218, 241)',
        '300':   'rgb(205, 185, 246)',
        '400':   'rgb(185, 147, 240)',
        '500':   'rgb(161, 109, 228)',
        '600':   'rgb(137, 74, 205)',
        '700':   'rgb(113, 43, 174)',
        '800':   'rgb(82, 18, 141)',
        '900':   'rgb(32, 7, 105)',
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
