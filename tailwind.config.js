/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        skyBlue: '#B6E1EB',
        gray: '#EDE7F4',
        DeepBlue: '#230081',
        LightBlue: '#1e7bc4',
        Dark: '#202020',
      },
      backgroundImage: {
        'gradient-radial': 'linear-gradient(to right, #B6E1EB 20%, #EDE7F4 50%, #B6E1EB 20%)',
      },
      screens: {
        xxs: "448px",
        xs: "540px",
        sm: "640px",
        md: "768px",
        xmd: "820px",
        mlg: "912px",
        lg: "1024px",
        sxl: "73.25rem",
        xl: "1280px", //1280px
        xxl: "96rem", //1536px,
      },
    },
  },
  plugins: [],
};
