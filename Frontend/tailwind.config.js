/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softBlue: '#EEF4FF', // Add your custom color here
      },
    },
  },
  plugins: [],
};
