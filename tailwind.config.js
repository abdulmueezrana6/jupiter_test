/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
extend: {
  keyframes: {
    fadeIn: {
      "0%": { opacity: "0", transform: "scale(0.95)" },
      "100%": { opacity: "1", transform: "scale(1)" },
    },
    gradientBorder: {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" },
    },
  },
  animation: {
    fadeIn: "fadeIn 0.3s ease-out",
    gradientBorder: "gradientBorder 6s ease infinite",
  },
},

  },
  plugins: [],
}