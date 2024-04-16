/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        ds:"320px",
        xxs:"350px",
        xs: "480px",
        bs: "520px"
      },
    },
  },
  plugins: [],
}