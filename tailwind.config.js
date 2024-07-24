/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: "Outfit, sans",
        "young-serif": "YoungSerif",
      },
    },
  },
  plugins: [],
};
