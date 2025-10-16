module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
          fontFamily: {
            'lexend': ['var(--font-lexend)', 'system-ui', 'sans-serif'],
            'poppins': ['var(--font-poppins)', 'system-ui', 'sans-serif'],
            'marcellus': ['var(--font-marcellus)', 'serif'],
          },
          aspectRatio: {
            '4/5': '4 / 5',
          },
          scale: {
            '101': '1.01',
            '102': '1.02',
          },
      colors: {
        primary: {
          DEFAULT: '#EDE1D6',
          dark: '#D4C4B0',
        },
        accent: {
          DEFAULT: '#C4A484',
          light: '#D4B494',
          dark: '#B59473',
        },
        text: {
          primary: '#2D2D2D',
          secondary: '#6B7280',
          muted: '#9CA3AF',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #EDE1D6 0%, #F5F0E8 50%, #D4C4B0 100%)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
