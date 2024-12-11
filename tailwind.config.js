/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        skyBlue: "#B6E1EB",
        gray: "#EDE7F4",
        lightgray: "#F8F8F8",
        admingray: "#FAFBFC",
        DeepBlue: "#230081",
        LightBlue: "#1e7bc4",
        dark: "#20104B",
        black: "#202020",
        danger: "#ff0000",
        transparentWhite: "#FFFFFF80",
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
        xl: "1280px", // 1280px
        xxl: "96rem", // 1536px
      },
      fontSize: {
        "3xl": "2rem", // 32px
        "2xl": "1.5rem", // 24px
        xl: "1.375rem", // 22px (corrected to 1.375rem to match 22px)
        lg: "1.25rem", // 20px
        md: "1.125rem", // 18px
        base: "1rem", // 16px
        sm: "0.875rem", // 14px
        xs: "0.75rem", // 12px
        "2xs": "0.688rem", // 11px
      },
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "spin-fast": "spin 0.5s linear infinite",
        pulse: 'pulse 2s infinite',
        zoomIn: 'zoomIn 1.5s ease-out forwards',
        spinOnce: 'spinOnce 0.5s linear',
      },
      keyframes: {
        spinOnce: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      
      },
    },
  },
  plugins: [],
};
