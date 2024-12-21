/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jockey: ['JockeyOne', 'sans-serif', ],
        jersey10: ['Jersey10', 'sans-serif',], // Add JockeyOne as a custom font family
      },
    },
  },
  plugins: [],
}