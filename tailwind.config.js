/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primarycolor: "#F9A826",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
      }
    },
  },
  plugins: [require("flowbite/plugin")],
}
