/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    screens: {
      sm: { max: '360px' },
      md: { min: '361px', max: '728px' },
      lg: { min: '729px', max: '1024px' },
      xl: { min: '1025px', max: '1920px' },
      '2xl': { min: '1921px' },
    },

    extend: {
      boxShadow: { default: '0 8px 8px rgba(0, 0, 0, 0.08)' },
      borderRadius: { default: '0.4rem' },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif', 'serif', 'cursive', 'fantasy'],
      },
      spacing: {
        xs: '0.8rem',
        sm: '1rem',
        base: '1.6rem',
        lg: '2.4rem',
        xl: '3.2rem',
        '2xl': '4.0rem',
        '3xl': '4.8rem',
        '4xl': '5.6rem',
      },
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        content: 'rgb(var(--color-content) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
      },
    },
  },
};
