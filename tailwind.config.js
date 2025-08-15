/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cleanBlue: "#4A90E2",     // Cleanliness, trust, innovation
        ecoGreen: "#2E8B57",      // Growth, sustainability
        refinedGold: "#FFD700",   // Wealth from waste, prosperity
        earthBrown: "#7F5C4F",    // Organic roots, groundedness
        boldBlack: "#000000",     // Professionalism, clarity
        softGray: "#F4F4F4",      // Clean, simple backgrounds
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],   // Headings & body
        serif: ["Merriweather", "serif"],     // Accents & quotes
      },
    },
  },
  plugins: [],
};
