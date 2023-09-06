/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1300px"
    },
    extend: {
      colors: {
        darkBlue: 'hsl(240, 38%, 20%)',
        grayishBlue: 'hsl(240, 18%, 77%)',
      }
    },
  },
  plugins: [],
}

