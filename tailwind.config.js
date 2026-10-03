/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#b7dfff',
          300: '#85c7ff',
          400: '#4da4ff',
          500: '#1d7bff',
          600: '#125fe5',
          700: '#134db2',
          800: '#153f8d',
          900: '#173a73'
        },
        ink: '#0f172a',
        accent: '#f59e0b'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};
