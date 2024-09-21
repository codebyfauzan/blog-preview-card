/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        "gray-500": "hsl(0, 0%, 42%)",
        "gray-950": "hsl(0, 0%, 7%)",
      },
    },
    fontFamily: {
      figtree: ["Figtree, system-ui"],
    },
  },
  plugins: [],
};
