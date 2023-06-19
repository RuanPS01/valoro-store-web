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
      'primary-100': '#09f8b3',
      'primary-200': '#08d298',
      'primary-300': '#07ac7d',
      'primary-400': '#047957',
      'primary-500': '#04664a',
      'primary-600': '#023325',
      'secondary-100': '#74B9FF',
      'secondary-200': '#639ED9',
      'secondary-300': '#4C7AA8',
      'secondary-400': '#2A435C',
      'secondary-500': '#1B2B3B',
      'secondary-600': '#0F1821',
      'dark': '#111111',
      'super-light-gray': '#98A6AD',
      'light-gray': '#949494',
      'gray': '#282828',
      'dark-gray': '#1b1c1d',
      'white': '#FFFFFF',
      'white-gray': '#f9f9f9',
      'black': '#000000',
      'text': '#6C757D',
      'red': '#FE0000',
      'light': '#DEE2E6'
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
