module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        customUpShodow: "0 -10px 15px -3px rgba(0, 0, 0, 0.2)",
      },
      screens: {
        custom2xl: "1920px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        customOrange: "#E07E0A",
        customHoverOrange: "#c37314",
        customBlack: "#2c2926",
        customGray: "#24292f",
        white: "#ffffff",
        black: "#000000",
      },
      width: {
        "4/7": "57.142857%",
        "7/10": "70%",
      },
    },
  },
  plugins: [],
};
