/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      backgroundImage: {        
        chat_bg: "url('../public/img/chat_bg.jpg')",      
      },    
    },
  },
  plugins: [],
}

