/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: { default: '0 8px 8px rgba(0, 0, 0, 0.08)' },
      borderRadius: { default: '0.4rem' },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif', 'serif', 'cursive', 'fantasy'],
      },
      fontWeight: { light: 300, normal: 400, bold: 600 },
      fontSize: {
        xxxxsmall: '0.8rem',
        xxxsmall: '1.2rem',
        xxsmall: '1.4rem',
        xsmall: '1.6rem',
        small: '2rem',
        medium: '2.4rem',
        large: '3.2rem',
        xlarge: '4rem',
        xxlarge: '4.8rem',
        xxxlarge: '5.6rem',
        huge: '6.4rem',
      },
      colors: {
        bkg: '#7dd3fc',
      },
      spacing: {
        xxxsmall: '0.8rem',
        xxsmall: '1rem',
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem',
      },
    },
  },
};
