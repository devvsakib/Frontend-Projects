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
        tertiary: 'var(--tertiary-color)'
      },
      backgroundColor: {
        primary: 'var(--background-color)'
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-card': 'var(--gradient-card)',
        primaryBG: "url(/images/banner.png)"
      },
    },
  },
  plugins: [],
}
