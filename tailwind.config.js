/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#038B86",
        secondary: "#025956",
        newWhite: "#F4F7FA",
        newBlack: "#161C2D",
      },
      backgroundImage: {
        "hero-pattern": "url('./images/Banner/CTA.png')",
      },
    },
  },
  plugins: [],
};
