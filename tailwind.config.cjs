const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      maxWidth: {
        "full-width": "1920px",
      },

      backgroundImage: {
        "hero-image": "url('/assets/images/hero-bg-main.png')",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: colors.neutral[100],
        secondary: colors.slate[900],
        popping: colors.sky[400],
      },
    },
  },
  plugins: [],
};
