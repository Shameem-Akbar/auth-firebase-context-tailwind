/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#9ff4bf",

          "secondary": "#25bfd1",

          "accent": "#ede747",

          "neutral": "#18171C",

          "base-100": "#ffffff",

          "info": "#3D9AE1",

          "success": "#60E2BB",

          "warning": "#E09006",

          "error": "#F64C54",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

