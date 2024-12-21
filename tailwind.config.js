/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-up': 'slideUp 1.5s ease-out forwards',
      },
      fontFamily: {
        jockey: ['JockeyOne', 'sans-serif', ],
        jersey10: ['Jersey10', 'sans-serif',], // Add JockeyOne as a custom font family
      },
    },
  },
  plugins: [],
}