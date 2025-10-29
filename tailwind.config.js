/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {},
      maxWidth: {
        1180: '73.75rem',
      },
      spacing: {
        'mobile-nav': '46px',
        'mobile-header': '125px',
      },
      colors: {
        'nav-bg': '#efede5',
        'hover-nav-text': '#4d3126',
        'divider-bg': 'rgb(238, 238, 238)',
        'right-icon': '#444',
        'sign-bg': '#f2f2f2',
        'side-title': '#4d494a',
        'side-upper-item': '#83521e',
        'side-upper-hover': '#bb9064',
      },
    },
  },
  plugins: [],
};
