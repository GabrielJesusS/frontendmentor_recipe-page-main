/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{html,js,ts}"],
  theme: {
    extend: {
      margin: {
        content: "7.6875rem",
      },
      maxWidth: {
        "2.5xl": "46rem",
      },
      fontFamily: {
        outfit: "Outfit, sans",
        "young-serif": "YoungSerif, serif",
      },
      colors: {
        "alt-stone": {
          100: "hsl(30, 54 %, 90 %)",
          150: "hsl(30, 18 %, 87 %)",
          600: "hsl(30, 10 %, 34 %)",
          900: "hsl(24, 5 %, 18 %)",
        },
        "alt-brown": "hsl(14, 45 %, 36 %)",
        "alt-rose": {
          50: "hsl(330, 100 %, 98 %)",
          800: "hsl(332, 51 %, 32 %)",
        },
      },
    },
  },
  plugins: [],
};
