module.exports = {
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    
    safelist: [
      'from-green-400',
      'from-blue-400',
      'from-gray-400',
      'from-red-400',
      'to-gray-700',
      'to-blue-700',
      'to-green-700', 
      'to-red-700',     
    ],
  },
  darkMode: 'class', // false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
