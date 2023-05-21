/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
            'open': ['Open Sans', 'sans-serif'],
          },
          colors:{
            'primary': '#0F3460',
          },
      },
    },
    plugins: [],
  }