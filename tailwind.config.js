/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      keyframes: {
        'scale-up-down': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
        },
      },
      animation: {
        'scale-up-down': 'scale-up-down 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}