/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Cairo', 'sans-serif'],
        'aref-ruqaa': ['Aref Ruqaa Ink', 'serif'],
        'tajawal': ['Tajawal', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#00b4d8',
        'brand-purple': '#8e44ad',
        'brand-pink': '#EF466F',
        'custom-bg': '#f4f5f6',
      }
    },
  },
  plugins: [],
}