/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // breakpoints for responsive
    screens: {
      '2xl': { max: '1400px' },
      xl: { max: '1279px' },
      '2lg': { max: '859px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '419px' },
    },
    extend: {
      colors: {
        bluePrimary: '#377dff',
        redPrimary: '#FF5630',
        bluePrimary: '#377DFF',
        //login with another app color button
        grayscaleGray: '#4E5D78',
        whiteColor: '#fff',
        blackColor: '#333',
      },

      fontWeight: {
        big: '900',
        bold: '700',
        semiBold: '600',
        medium: '500',
        regular: '400',
      },
    },
  },
  plugins: [],
};
