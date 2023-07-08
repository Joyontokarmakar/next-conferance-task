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
        darkBlue: '#0A142F',
        primaryGray: '#617187',
        lightGray: '#CDCDCD',
        mediumGray: '#617187',
        darkGray: '#667085',
        primaryWhite: '#F9FAFB',
        primaryYellow: '#FFC93E',
        lightYellow: '#FFF9EB'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.png')",
      },
      screens: {
        xxLargeDevice: { max: "1536px" },
        xLargeDevice: { max: "1280px" },
        largeDevice: { max: "1024px" },
        mediumDevice: { max: "768px" },
        smallDevice: { max: "500px" },
      },
    },
  },
  plugins: [],
}
