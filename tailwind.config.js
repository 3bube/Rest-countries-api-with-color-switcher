/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'elements-dark': 'hsl(209, 23%, 22%)',
        'background-dark': 'hsl(207, 26%, 17%)',
        'text-light': 'hsl(200, 15%, 8%)',
        'input-light': 'hsl(0, 0%, 52%)',
        'background-light': 'hsl(0, 0%, 98%)',
        'white': 'hsl(0, 0%, 100%)'
      },
    },
  },
  plugins: [],
}
