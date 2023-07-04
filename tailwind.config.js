/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navbg: "rgba(18, 18, 18, 0.42)",
      },
      backdropBlur: {
        sm: "5px",
      },
      fontFamily: {
        navtxt: "'myfont',sans-serif",
      },
      keyframes: {
        "trans-navbar": {
          from: { opacity: "0", transform: "translateX(-2%)", width: "95%" },
          to: { opacity: "1", transform: "translateX(0)", width: "90%" },
        },
      },
      animation: {
        "trans-navbar-component-1": "trans-navbar 0.25s ease-in-out 1",
        "trans-navbar-component-2": "trans-navbar 0.5s ease-in-out 1",
        "trans-navbar-component-3": "trans-navbar 0.75s ease-in-out 1",
        "trans-navbar-component-4": "trans-navbar 1s ease-in-out 1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
