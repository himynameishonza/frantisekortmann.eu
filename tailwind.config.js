module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/*.{js,ts,jsx,tsx,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        oswald: ['"Oswald"', "sans-serif"],
        barlow: ['"Barlow"', "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
