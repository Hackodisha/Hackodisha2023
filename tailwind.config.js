/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'footerbg': './pngwing 7.png',
      },
      screens:{
        'sm-mobile': {max: '400px'},
        'mobile': {max: '640px'},
        'wide': {min: '2000px'},
        'ultrawide': {min: '4000px'},
      },
    },
  },
  plugins: [],
}
