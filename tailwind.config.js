/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor:{
        default:"#ececf6"

      },
      fontFamily:{
        mona:["mona-sans","sans-serif"],
        monaBold:["mona-sans-bold",'sans-serif']
      },
      screens: {
        '2xl': '1800px',
        'lg':'1023px' // Adjust as needed
      },
      fontSize:{
        'xsmall':"6px"
      }
      
    },
  },
  plugins: [],
};
