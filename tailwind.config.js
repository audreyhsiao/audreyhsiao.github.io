/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./photography.html"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0b",
        accent: {
          DEFAULT: "#ff2e63",
          dark: "#e0254f",
        },
        modal: {
          fg: "#1a1a1a",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"Roboto"', '"Open Sans"', "sans-serif"],
        mono: ['"Fira Code"', "monospace"],
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
};
