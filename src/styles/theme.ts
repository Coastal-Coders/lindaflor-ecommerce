import plugin from 'tailwindcss/plugin';

const themePlugin = plugin(
  function ({ addBase }) {
    addBase({
      ':root': {
        '--color-background': '149 236 226',
        '--color-content': '0 0 0',
        '--color-primary': '146 120 42',
        '--color-secondary': '68 117 231',
        '--color-tertiary': '15 208 230',
      },
      '.dark': {
        '--color-background': '45 45 45',
        '--color-content': '255 255 255',
        '--color-primary': '146 120 42',
        '--color-secondary': '68 117 231',
        '--color-tertiary': '15 208 230',
      },
      '.orange': {
        '--color-background': '235 141 0',
        '--color-content': '255 255 255',
        '--color-primary': '146 120 42',
        '--color-secondary': '68 117 231',
        '--color-tertiary': '15 208 230',
      },
    });

    addBase({
      '*': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
        outline: 'none',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      html: { fontSize: '62.5%' },
      body: {
        backgroundColor: 'rgb(var(--color-background))',
        fontFamily: "'Montserrat', sans-serif",
      },
      'input,\ntextarea,\nbutton': { fontFamily: 'inherit' },
      button: { cursor: 'pointer' },
      a: { color: 'inherit', textDecoration: 'none' },
    });

    const montserrat300 = {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '300',
      fontDisplay: 'swap',
      src: 'local(""), url("/fonts/montserrat-v15-latin-300.woff2") format("woff2")',
    };
    const montserrat400 = {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '400',
      fontDisplay: 'swap',
      src: 'local(""), url("/fonts/montserrat-v15-latin-regular.woff2") format("woff2")',
    };
    const montserrat600 = {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '600',
      fontDisplay: 'swap',
      src: 'local(""), url("/fonts/montserrat-v15-latin-600.woff2") format("woff2")',
    };

    addBase({
      '@font-face': montserrat300,
    });
    addBase({
      '@font-face': montserrat400,
    });
    addBase({
      '@font-face': montserrat600,
    });
  },
  {
    theme: {
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
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
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        content: 'rgb(var(--color-content) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
      },

      extend: {
        boxShadow: { default: '0 8px 8px rgba(0, 0, 0, 0.08)' },
        borderRadius: { default: '0.4rem' },
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
      },
    },
  }
);

export default themePlugin;
