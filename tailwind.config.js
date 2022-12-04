/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        background: {
          classe1: {
            start: '#FFB72D',
            end: '#FCAC12'
          },
          classe2: {
            start: '#FFB72D',
            end: '#FCAC12'
          }
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
