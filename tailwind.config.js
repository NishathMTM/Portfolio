/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        borderColor :{
            'secondary' : 'rgb(15 23 42)'
        }
    },
      fontFamily : {
        'hero-font' : 'Sriracha'
      }
  },
  plugins: [],
}

