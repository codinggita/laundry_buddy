/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softBlue: '#EEF4FF', historybg : '#F3F4F6' // Add your custom color here
      },
    },
  },
  plugins: [],
};
