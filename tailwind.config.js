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
      }
      
    },
  },
  plugins: [],
};
