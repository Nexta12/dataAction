/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      green: "#16a34a",
      "light-green": "#22c55e",
      white: "#fff",
      gray: "#D9D9D9",
      "light-gray": "#f9fafb",
      "very-light-gray": "#F7F8FA",
      "dark-gray": "#6b7280",
      background: "#f2f2f2",
      dark: "#0F172A",
      "light-red": "#EF8989",
      blue: "#0060df",
      transparent: "transparent",
      overlay: "rgba(0,0,0,.4)",
      danger: "#ff0000",
      gold: "#f6b01e",
    },
    screens: {
      "2xs": "28rem", //448px
      xs: "33.75rem", //540px
      sm: "40rem", //640px
      md: "48rem", //768px
      lg: "64rem", //1024px
      sxl: "73.25rem",
      xl: "80rem", //1280px
      "2xl": "96rem", //1536px
    },
    extend: {},
  },
  plugins: [],
};
