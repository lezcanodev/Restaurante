/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'float':{
          '0%': {
            opacity: .3,
            transform: 'translateY(10px) scale(2.2) rotate(45deg)',
          },
          '100%':{
            opacity: 0,
            transform: 'translateY(-85vh) scale(0) rotate(-45deg)'
          }
        },
        'pop':{
          '0%': {
            opacity: 0,
            transform: 'scale(0)',
          },
          '100%':{
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      }
    },
    //customize your breakpoints
    //ej: <div class="table:flex">
   /* screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    }*/
  },
  //https://tailwindcss.com/docs/adding-custom-styles#writing-plugins
  plugins: [],
}
