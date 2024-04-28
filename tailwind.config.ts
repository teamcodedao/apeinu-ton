import type {Config} from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#034FE9',
        secondary: '#FF9D32',
      },
      fontFamily: {
        'boldie-slab': ['var(--font-boldie-slab)'],
      },
      screens: {
        desktop: '1440px',
      },
    },
  },
  plugins: [
    require('tailwindcss-mixins'),
    require('tailwindcss-multi'),
    plugin(function ({addUtilities}) {
      addUtilities({
        '.btn-shadow': {
          boxShadow: '4px 4px 0 -2px black',
        },
      });
    }),
  ],
};
export default config;
