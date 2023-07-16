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
    fontSize: {
      xs: '1.2rem',
      sm: '1.4rem',
      lg: '1.6rem',
    },
    extend: {
      colors: {
        bluePrimary: '#377dff',
        greenPrimary: '#38CB89',
        redPrimary: '#FF5630',
        yellowPrimary: '#FFAB00',
        'bluePrimary-80': '#d7e5ff',
        'greenPrimary-80': '#d7f5e7',
        'redPrimary-80': '#ffddd6',
        'yellowPrimary-80': '#ffeecc',
        dark1: '#191C21',
        dark2: '#212833',
        white: '#fff',
        grayscale: '#4E5D78',
        'grayscale-80': '#717d93',
        'grayscale-60': '#959eae',
        'grayscale-40': '#b8bec9',
        'grayscale-20': '#dcdfe4',
        'grayscale-5': '#f6f7f8',
        'grayscale-3': '#fafafb',
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
