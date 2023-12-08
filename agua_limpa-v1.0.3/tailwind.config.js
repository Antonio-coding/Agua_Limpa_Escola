module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        green: { 300: "#6ee66f" },
        gray: { 100: "#f5f7fa", 200: "#e5e7eb", 500: "#acacac" },
        blue_gray: {
          100: "#d9d9d9",
          400: "#7d8eae",
          900: "#33363f",
          "200_66": "#abbed166",
          "900_01": "#263238",
        },
        orange: { A200: "#ff9141" },
        red: { 700: "#de1f1f" },
        blue: { 300: "#56acde", 800: "#2d73b5" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        amber: { A100: "#fce47d", A400: "#ffcc00" },
        teal: { 100: "#aae2e6" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: {
        bs: "0px 4px  8px 0px #abbed166",
        bs1: "0px 4px  4px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
