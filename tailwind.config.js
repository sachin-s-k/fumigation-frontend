/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black': '#000000', // You can use your desired black color code
      },

      scale: {
        '101.5': '1.015',
      }

      
    },
    fontFamily: {
      roboto: ['Roboto']
      }
  },
  plugins: [],
  corePlugins: {
    // Add hover variant for the scale class
    scale: ['hover'],
  }
}