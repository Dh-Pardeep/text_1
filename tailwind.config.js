/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "xxsm": "12px",
      "xsm": "14px",
      "sm": "16px",
      "xmd": "18px",
      "md": "20px",
      "xlg": "24px",
      "lg": "36px",
      "xl": "50px",
      "xxl": "64px",
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      Josefin: ['Josefin Sans', "sans-serif"],
    },
    extend: {
    },
  },
  plugins: [],
}

