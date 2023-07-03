/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bebas: ['Bebas Neue'],
        monse: ['Montserrat'],
      },
      fontSize:{
        descri:['0.9rem', {
          lineHeight: '1rem',
          //letterSpacing: '-0.01em',
          //fontWeight: '500',
        }],
      },
      colors:{
        comercia: {
          one: '#fe0001',
          two: '#7a027a',
          three: '#038639',
          four: '#13017b',
          five: '#f2047e',
          six: '#ffff00'
        }
      }
    },
  },
  plugins: [],
}