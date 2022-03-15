module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      "1/4-vh": "25vh",
      "1/2-vh": "50vh",
      "3/4-vh": "75vh",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
