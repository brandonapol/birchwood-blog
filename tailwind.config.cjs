/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'timberwolf': '#E6E1DB',
        'payne': '#536373',
        'slate-grey': '#7F8894',
        'cadet': '#9FACBD',
        'linen': '#FAEFE4'
      }
    },
  },
  plugins: [],
};

module.exports = config;
