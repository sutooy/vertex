/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neoRed: "#FF4911",
        neoGreen: "#90EE90",
        neoPurple: "#A388EE",
        neoBlue: "#7DF9FF"
      }
    },
  },
  plugins: [],
}

