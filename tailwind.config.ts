import type { Config } from 'tailwindcss';
import themePlugin from './src/styles/theme';

const config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  plugins: [require('tailwindcss-animate'), themePlugin],
} satisfies Config;

export default config;
