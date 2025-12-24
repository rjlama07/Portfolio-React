/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        georama: ["Georama", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
      },
      screens: {
        "3xl": "1920px",
      },
      width: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
      },
      inset: {
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "5/12": "41.666667%",
        "7/12": "58.333333%",
      },
    },
  },
  plugins: [],
};
