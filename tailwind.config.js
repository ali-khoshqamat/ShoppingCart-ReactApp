/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      padding: {
        "4/5": "80%",
        "1/5": "20%",
      },
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, minmax(260px, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
