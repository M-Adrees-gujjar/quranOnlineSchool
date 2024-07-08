/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': 'rgba(21, 103, 97, 255)', // Define your custom color here
      },
    },
  },
  plugins: [],
}