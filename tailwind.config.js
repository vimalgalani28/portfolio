const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // tailwind gives us the color pallet
        // if you want to use that refer https://tailwindcss.com/docs/customizing-colors
        // if you want to define new colors define here
        // to apply color use following syntax <div className="text-red-200 bg-blue-200">
        lightGray: "#f7fafc",
        darkGray: "#566474",
      },
    },
    screens: {
      xs: "0px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
