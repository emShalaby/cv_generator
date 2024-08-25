/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1700px",
      },
      keyframes: {
        expand: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animeation: {
        expand: "expand 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
