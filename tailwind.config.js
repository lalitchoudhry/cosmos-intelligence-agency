/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "500px",
      md: "770px",
      lg: "1050px",
      xl: "1540px",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      blue: '#001F3F',
      purple: "#7F00FF",
      silver: "#CCCCCC",
      pink: '#FF69B4',
      yellow: "#FFFF00",
      orange: '#FFA500',
      green: '#00FF00',
      'gray-dark': '#273444',
      gray: '#A8B4B8',
      'gray-light': '#d3dce6',
      teal: "#9BC53D",
      coral: "#FF6F61",
    },
    fontFamily: {
      'comic': ["Comic Neue", 'cursive'],
      'space': ["Space Mono", 'monospace'],
      'mon': ["Montserrat", 'sans-serif'],
      'orb': ["Orbitron", 'sans-serif'],
    },
    extend: {
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
}

