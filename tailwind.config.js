module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        boho: {
          primary: '#2C3E50', // Dark blue
          secondary: '#F8F9FA', // Light gray
          accent: '#E74C3C', // Red
          text: '#34495E' // Dark gray
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif']
      }
    }
  },
  plugins: []
}
