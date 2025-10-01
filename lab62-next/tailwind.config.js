module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D0D0D',
        accent: {
          from: '#FF6B00',
          to: '#FF8F33',
        },
        text: {
          DEFAULT: '#FFFFFF',
          light: '#CCCCCC',
          muted: '#999999',
        },
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #FF6B00 0%, #FF8F33 100%)',
      },
    },
  },
  plugins: [],
}
