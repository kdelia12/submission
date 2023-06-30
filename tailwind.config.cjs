/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",

  theme: {
    container: { center: true },

    screens: {
      sm: "480px",
      md: "769px",
      lg: "1025px",
      xl: "1201px",
    },

    fontFamily: {
      body: ["Consolas", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "rgb(0,0,0)",
        secondary: "rgba(0,0,0)",
        darkblue: "#000000",
        black : "#000000",
      },
    },
  },

  plugins: [],
};
