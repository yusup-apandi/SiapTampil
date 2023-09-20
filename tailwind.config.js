/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': {
          '50': '#E6E7F0',
          '100': '#B1B5D1',
          '200': '#8B91BB',
          '300': '#565E9C',
          '400': '#353F89',
          '500': '#030F6B',
          '600': '#030E61',
          '700': '#020B4C',
          '800': '#02083B',
          '900': '#01062D',
        }
        },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

