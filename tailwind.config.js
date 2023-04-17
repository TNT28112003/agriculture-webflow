/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ['"Space Mono"', 'monospace', 'sans-serif'],
        workSans: ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#A259FF',
        dark: '#2B2B2B',
        gray: '#3B3B3B',
        grayOpacity: 'rgba(59, 59, 59, 0.5)',
        grayLight: '#858584',
        while: '#FFFFFF',
      },
      backgroundImage: {
        'hero-mashroom':
          "linear-gradient(to right bottom, rgba(162, 89, 255, 0) 0%, #A259FF 100%), url('./assets/ScreenMobile.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
