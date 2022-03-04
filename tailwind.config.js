module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    container: {
      center: true,
      // padding: {
      //   DEFAULT: '2rem',
      //   sm: '3rem',
      //   lg: '5rem',
      //   xl: '6rem',
      //   '2xl': '7rem',
      // },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
