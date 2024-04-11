/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'cookie':["Cookie",],
      },
      colors : {
        "accent":"#532915",
        "primary" : "#01051e",
        "primary-light" : "#050a33",
        "secondary":"#0174BE",
        "third":'#FFC436'
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT : '15px',
      },
    },
  },
  plugins: [],
}

