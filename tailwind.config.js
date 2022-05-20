module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        text: {
          normal: "#e6e6e6"
        },
        black: {
          bg : "#121214",
          nav: "#202024",
          countdown: "#52525c"
        },
        button: {
          succeeded: "#4cd62b",
          failed: "#e83f5b"
        },
        blue: {
          normal: "#225aa3",
          dark: "#1b4172"
        }
      },
    },
  },
  plugins: [],
}
