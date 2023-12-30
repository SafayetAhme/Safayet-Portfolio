/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'inter': ['inter', 'sans-serif'],
      },
      colors: {
        primary: '#09090B', // Replace with your desired primary color
        secondary: '#2ecc71', // Replace with your desired secondary color
        // Add more custom colors if needed
      },
    },
  },
  plugins: [require("daisyui")],
}