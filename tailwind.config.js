/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "primary" : "#030516",
        "secondary" : "#0c2645",
        "accent" : "#b3d0f2",
        "primaryColor" : "#FFFFFF",
        "accentText" : "#60a6e7",
        "secondaryText" : "#8d8a93"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #071626 0%, #071626 40%, #04101A 50%, #020B11 80%, #02070d 100%)',
        'custom-bg': 'linear-gradient(180deg, #030516 0%, #030516 30%, #0c2645 50%, #0c2645 100%)',
        'custom-bg-invert': 'linear-gradient(180deg, #0c2645 0%, #0c2645 5%, #030516 15%, #030516 100%)',
        'custom-bg-second': 'linear-gradient(180deg, #030516 0%, #030516 30%, #030516 50%, #071626 60%, #071626 100%)',
      },
      backgroundSize: {
        'custom-small': '100% auto', // Custom size
        'custom-large': '32% auto',
      },
      animation: {
        scroll: "scroll 15s linear infinite",
        scrollRight: "scrollRight 15s linear infinite",
      },
      keyframes: {
          scroll: {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-100%)" },
          },
          scrollRight:{
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(0%)" },
          }
      },
    },
  },
  plugins: [
    
  ],
}