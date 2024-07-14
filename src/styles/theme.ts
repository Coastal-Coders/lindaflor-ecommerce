import plugin from 'tailwindcss/plugin';

const themePlugin = plugin(
  function ({ addBase }) {
    addBase({
      '*': {
        outline: 'none',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        fontFamily: 'Montserrat',
      },
      html: { fontSize: '62.5%' },
      body: {
        backgroundColor: 'hsl(var(--color-background))',
        color: 'hsl(var(--color-foreground))',
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

    addBase({
      ':root': {
        '--color-background': '353deg 95% 85%',
        '--color-foreground': '20deg 14% 4%',

        '--color-border': '358deg 100% 75%',
        '--color-input': '20deg 6% 90%',
        '--color-ring': '25deg 95% 53%',

        '--color-card': '0deg 0% 100%',
        '--color-card-foreground': '20deg 14% 4%',

        '--color-popover': '0deg 0% 100%',
        '--color-popover-foreground': '20deg 14% 4%',

        '--color-primary': '40deg 100% 99%',
        '--color-primary-foreground': '60deg 9% 98%',

        '--color-secondary': '358deg 100% 75%',
        '--color-secondary-foreground': '24deg 10% 10%',

        '--color-muted': '60deg 5% 96%',
        '--color-muted-foreground': '25deg 5% 45%',

        '--color-accent': '60deg 5% 96%',
        '--color-accent-foreground': '24deg 10% 10%',

        '--color-destructive': '0deg 84% 60%',
        '--color-destructive-foreground': '60deg 9% 98%',

        '--color-success': '142deg 71% 51%',
        '--color-success-foreground': '141deg 78% 12%',

        '--color-warning': '60deg 71% 51%',
        '--color-warning-foreground': '60deg 50% 17%',

        '--color-info': '198deg 87% 54%',
        '--color-info-foreground': '198deg 87% 97%',
      },

      '.dark': {
        '--color-background': '20deg 14% 4%',
        '--color-foreground': '60deg 9% 98%',
        '--color-letterum': '40deg 100% 99%',
        '--color-letterdois': '358deg 100% 75%',
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

        '--color-success': '142deg 71% 51%',
        '--color-success-foreground': '142deg 78% 8%',

        '--color-warning': '60deg 71% 51%',
        '--color-warning-foreground': '60deg 5% 4%',

        '--color-info': '198deg 87% 54%',
        '--color-info-foreground': '198deg 87% 7%',

        '--color-destructive': '0deg 72% 51%',
        '--color-destructive-foreground': '60deg 9% 98%',
      },
    });
  },
  {
    theme: {
      fontSize: {
        xs: ['1.2rem', { lineHeight: '1.6rem' }],
        sm: ['1.4rem', { lineHeight: '2rem' }],
        base: ['1.6rem', { lineHeight: '2.4rem' }],
        lg: ['1.8rem', { lineHeight: '2.8rem' }],
        xl: ['2rem', { lineHeight: '2.8rem' }],
        '2xl': ['2.4rem', { lineHeight: '3.2rem' }],
        '3xl': ['3rem', { lineHeight: '3.6rem' }],
        '4xl': ['3.6rem', { lineHeight: '4rem' }],
        '5xl': ['4.8rem', { lineHeight: '1.6rem' }],
        '6xl': ['6rem', { lineHeight: '1.6rem' }],
        '7xl': ['7.2rem', { lineHeight: '1.6rem' }],
        '8xl': ['9.6rem', { lineHeight: '1.6rem' }],
        '9xl': ['12.8rem', { lineHeight: '1.6rem' }],
      },
      borderRadius: {
        none: '0px',
        sm: '0.2rem',
        DEFAULT: '0.4rem',
        md: '0.6rem',
        lg: '0.8rem',
        xl: '1.2rem',
        '2xl': '1.6rem',
        '3xl': '2.4rem',
        full: '9999px',
      },
      spacing: {
        px: '1px',
        0: '0px',
        0.5: '0.2rem',
        1: '0.4rem',
        1.5: '0.6rem',
        2: '0.8rem',
        2.5: '1rem',
        3: '1.2rem',
        3.5: '1.4rem',
        4: '1.6rem',
        5: '2rem',
        6: '2.4rem',
        7: '2.8rem',
        8: '3.2rem',
        9: '3.6rem',
        10: '4rem',
        11: '4.4rem',
        12: '4.8rem',
        14: '5.6rem',
        16: '6.4rem',
        20: '8rem',
        24: '9.6rem',
        28: '11.2rem',
        32: '12.8rem',
        36: '14.4rem',
        40: '16rem',
        44: '17.6rem',
        48: '19.2rem',
        52: '20.8rem',
        56: '22.4rem',
        60: '24rem',
        64: '25.6rem',
        72: '28.8rem',
        80: '32rem',
        96: '38.4rem',
      },

      extend: {
        fontFamily: {
          Montserrat: ['Montserrat', 'sans-serif', 'sans', 'Helvetica'],
        },
        columns: {
          '3xs': '25.6rem',
          '2xs': '28.8rem',
          xs: '32rem',
          sm: '38.4rem',
          md: '44.8rem',
          lg: '51.2rem',
          xl: '57.6rem',
          '2xl': '67.2rem',
          '3xl': '76.8rem',
          '4xl': '89.6rem',
          '5xl': '102.4rem',
          '6xl': '115.2rem',
          '7xl': '128rem',
        },
        colors: {
          background: 'hsl(var(--color-background) / <alpha-value>)',
          foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
          letterum: 'hsl(var(--color-letterum) / <alpha-value>)',
          letterdois: 'hsl(var(--color-letterdois) / <alpha-value>)',

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

          success: {
            DEFAULT: 'hsl(var(--color-success) / <alpha-value>)',
            foreground: 'hsl(var(--color-success-foreground) / <alpha-value>)',
          },

          warning: {
            DEFAULT: 'hsl(var(--color-warning) / <alpha-value>)',
            foreground: 'hsl(var(--color-warning-foreground) / <alpha-value>)',
          },

          info: {
            DEFAULT: 'hsl(var(--color-info) / <alpha-value>)',
            foreground: 'hsl(var(--color-info-foreground) / <alpha-value>)',
          },
        },
      },
    },
  }
);

export default themePlugin;
