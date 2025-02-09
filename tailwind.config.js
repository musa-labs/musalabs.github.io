/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./themes/hugo-saasify-theme/tailwind.config.js')],
  content: [
    "./themes/hugo-saasify-theme/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.{html,md}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4faf9',
          100: '#edf7f5',
          200: '#c9e8e0',
          300: '#a5d9cc',
          400: '#81cab7',
          500: '#5dbba2',
          600: '#44a289',
          700: '#357e6b',
          800: '#265a4c',
          900: '#17362e',
        },
        secondary: {
          50: '#f3f6fc',
          100: '#ebf1fa',
          200: '#c3d4ef',
          300: '#9bb7e4',
          400: '#729ad9',
          500: '#4a7dce',
          600: '#3164b5',
          700: '#264e8d',
          800: '#1b3864',
          900: '#10213c',
        },
      },
      // colors: {
      //   primary: {
      //     50: '#eef1fc',
      //     100: '#dde3f9',
      //     200: '#bbc7f3',
      //     300: '#99abec',
      //     400: '#778fe6',
      //     500: '#5573df',
      //     600: '#425ad6',
      //     700: '#3548ab',
      //     800: '#283680',
      //     900: '#1b2456',
      //   },
      //   secondary: {
      //     50: '#faf5ff',
      //     100: '#f3e8ff',
      //     200: '#e9d5ff',
      //     300: '#d8b4fe',
      //     400: '#c084fc',
      //     500: '#a855f7',
      //     600: '#9333ea',
      //     700: '#7e22ce',
      //     800: '#6b21a8',
      //     900: '#581c87',
      //   },
      // },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}