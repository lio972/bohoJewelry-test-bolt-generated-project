module.exports = {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          colors: {
            boho: {
              primary: '#D4A373',
              secondary: '#FAEDCD',
              accent: '#CCD5AE',
              text: '#4A4A4A'
            }
          },
          fontFamily: {
            sans: ['"Josefin Sans"', 'sans-serif'],
            serif: ['"Playfair Display"', 'serif']
          }
        }
      },
      plugins: []
    }
