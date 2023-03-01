/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'timberwolf': '#E6E1DB',
        'payne': '#536373',
        'slate-grey': '#7F8894',
        'cadet': '#ced5de',
        'linen': '#FAEFE4',
        'rose': '#846a6a',
        'eerie': '#1c221e'
      }
    },
    screens: {
      'sm': '400px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};

module.exports = config;
