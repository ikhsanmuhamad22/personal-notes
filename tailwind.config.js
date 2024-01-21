/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgDark: '#333',
        light: '#eee',
      },
    },
  },
  plugins: [],
};
