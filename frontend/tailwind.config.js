/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        miColor: '#F8BBD0;', // Puedes reemplazar #ff0000 con el código de color deseado
        colorSec: '#9F486D',
        navbarletras: '#7F2B50',
        letrasBuscador: '#9F486D',
        colorcarritosec:'#D19AB0',
        colorcarrito:'#7F2B50',
      },
      fontFamily: {
        rufina:['Rufina','sans-seriff'],
        cormorant: ['Cormorant SC', 'serif']
      },
    },
  },
  plugins: [],
}

