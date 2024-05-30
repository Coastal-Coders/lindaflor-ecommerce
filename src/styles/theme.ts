import plugin from 'tailwindcss/plugin';

const themePlugin = plugin(
  function ({ addBase }) {
    addBase({
      ':root': {
        '--color-background': '0deg 0% 100%',
        '--color-foreground': '20deg 14% 4%',

        '--color-border': '20deg 6% 90%',
        '--color-input': '20deg 6% 90%',
        '--color-ring': '25deg 95% 53%',

        '--color-card': '0deg 0% 100%',
        '--color-card-foreground': '20deg 14% 4%',

        '--color-popover': '0deg 0% 100%',
        '--color-popover-foreground': '20deg 14% 4%',

        '--color-primary': '25deg 95% 53%',
        '--color-primary-foreground': '60deg 9% 98%',

        '--color-secondary': '60deg 5% 96%',
        '--color-secondary-foreground': '24deg 10% 10%',

        '--color-muted': '60deg 5% 96%',
        '--color-muted-foreground': '25deg 5% 45%',

        '--color-accent': '60deg 5% 96%',
        '--color-accent-foreground': '24deg 10% 10%',

        '--color-destructive': '0deg 84% 60%',
        '--color-destructive-foreground': '60deg 9% 98%',
      },

      '.dark': {
        '--color-background': '20deg 14% 4%',
        '--color-foreground': '60deg 9% 98%',

        '--color-border': '12deg 6% 15%',
        '--color-input': '12deg 6% 15%',
        '--color-ring': '20deg 90% 48%',

        '--color-card': '20deg 14% 4%',
        '--color-card-foreground': '60deg 9% 98%',

        '--color-popover': '20deg 14% 4%',
        '--color-popover-foreground': '60deg 9% 98%',

        '--color-primary': '20deg 90% 48%',
        '--color-primary-foreground': '60deg 9% 98%',

        '--color-secondary': '12deg 6% 15%',
        '--color-secondary-foreground': '60deg 9% 98%',

        '--color-muted': '12deg 6% 15%',
        '--color-muted-foreground': '24deg 5% 64%',

        '--color-accent': '12deg 6% 15%',
        '--color-accent-foreground': '60deg 9% 98%',

        '--color-destructive': '0deg 72% 51%',
        '--color-destructive-foreground': '60deg 9% 98%',
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
        backgroundColor: 'hsl(var(--color-background))',
        color: 'hsl(var(--color-foreground))',
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
        boxShadow: { default: '0 8px 8px hsla(0, 0%, 0%, 0.08)' },
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
        colors: {
          background: 'hsl(var(--color-background) / <alpha-value>)',
          foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
          border: 'hsl(var(--color-border) / <alpha-value>)',
          input: 'hsl(var(--color-input) / <alpha-value>)',
          ring: 'hsl(var(--color-ring) / <alpha-value>)',

          primary: {
            DEFAULT: 'hsl(var(--color-primary) / <alpha-value>)',
            foreground: 'hsl(var(--color-primary-foreground) / <alpha-value>)',
          },

          secondary: {
            DEFAULT: 'hsl(var(--color-secondary) / <alpha-value>)',
            foreground: 'hsl(var(--color-secondary-foreground) / <alpha-value>)',
          },

          card: {
            DEFAULT: 'hsl(var(--color-card) / <alpha-value>)',
            foreground: 'hsl(var(--color-card-foreground) / <alpha-value>)',
          },

          popover: {
            DEFAULT: 'hsl(var(--color-popover) / <alpha-value>)',
            foreground: 'hsl(var(--color-popover-foreground) / <alpha-value>)',
          },

          muted: {
            DEFAULT: 'hsl(var(--color-muted) / <alpha-value>)',
            foreground: 'hsl(var(--color-muted-foreground) / <alpha-value>)',
          },

          accent: {
            DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)',
            foreground: 'hsl(var(--color-accent-foreground) / <alpha-value>)',
          },

          destructive: {
            DEFAULT: 'hsl(var(--color-destructive) / <alpha-value>)',
            foreground: 'hsl(var(--color-destructive-foreground) / <alpha-value>)',
          },
        },
      },
    },
  }
);

export default themePlugin;
