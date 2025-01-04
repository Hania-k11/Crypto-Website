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
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        'slideUp': 'slideUp 1.5s ease-out forwards',
         shake: 'shake 0.5s ease-in-out infinite',
      },
      fontFamily: {
        jockey: ['JockeyOne', 'sans-serif', ],
        jersey10: ['Jersey10', 'sans-serif',], // Add JockeyOne as a custom font family
      },
    },
  },
  plugins: [],
}