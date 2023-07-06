/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#111D5E',
        lightBlue: '#2563EB',
        primaryGray: '#617187',
        lightGray: '#CDCDCD',
        primaryWhite: '#F9FAFB',
        primaryYellow: '#FFC93E'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.png')",
      },
    },
  },
  plugins: [],
}
