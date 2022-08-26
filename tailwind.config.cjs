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
        "hero-image": "url('/assets/images/hero-bg.png')",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: colors.neutral[100],
        secondary: colors.slate[900],
        popping: colors.sky[400],
      },

      animation: {
        "pulse-custom": "pulse-custom 1s ease-in-out infinite",
      },

      keyframes: {
        "pulse-custom": {
          "0%": {
            "box-shadow": "0 0 0.25rem 0.25rem rgba(56, 189, 248, 1)",
            transform: "scale(1.03)",
          },

          "50%": {
            "box-shadow": "0 0 4rem 2rem rgba(56, 189, 248, 0.1)",
            transform: "scale(1)",
            opacity: 1,
          },

          "100%": {
            "box-shadow": "none",
            transform: "scale(0.97)",
          },
        },
      },
    },
  },
  plugins: [],
};
