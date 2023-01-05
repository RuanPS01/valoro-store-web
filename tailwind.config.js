module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary-100': '#6B1B21',
      'primary-200': '#AF2A34',
      'primary-300': '#FF4655',
      'primary-400': '#DA6B74',
      'primary-500': '#C77E83',
      'primary-600': '#F7B2B8',
      'secondary-100': '#0F1821',
      'secondary-200': '#1B2B3B',
      'secondary-300': '#2A435C',
      'secondary-400': '#4C7AA8',
      'secondary-500': '#639ED9',
      'secondary-600': '#74B9FF',
      'dark': '#111111',
      'gray': '#282828',
      'light-gray': '#949494',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    fontFamily: {
      primary: ['Mulish', 'sans-serif'],
      title: ['Geo', 'sans-serif'],
    },
    fontWeight: {
      extralight: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
     },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
};
