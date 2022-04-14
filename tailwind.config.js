module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "p-bg": "#F7F7F2",
        "p-border": "#253C78",
        "box-bg": "#EFE9E7",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
