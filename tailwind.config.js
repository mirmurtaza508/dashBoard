/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "947px",
        122: "324px",
        101: "500px",
      },
      backgroundColor: {
        gray: "#191c24",
      },
    },
  },
  plugins: [],
};
