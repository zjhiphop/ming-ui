// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
import { defineConfig } from 'windicss/helpers';
import formsPlugin from 'windicss/plugin/forms';

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  attributify: true,

  content: ['**/index.html', '**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '594px',
      md: '768px',
      lg: '1440px',
    },
    fontFamily: {
      regular: ['Larsseit, Arial, sans-serif'],
      bold: [
        'Larsseit-Bold,"Geneva", "Verdana","Lucida Sans Unicode",sans-serif',
      ],
      boldItalic: ['Larsseit-BoldItalic, "Arial Black", sans-serif'],
      extraBold: ['Larsseit-ExtraBold, Arial, sans-serif'],
      extraBoldItalic: ['Larsseit-ExtraBoldItalic, Arial, sans-serif'],
      italic: ['Larsseit-Italic, Arial, sans-serif'],
      light: ['Larsseit-Light, Arial, sans-serif'],
      lightItalic: ['Larsseit-LightItalic, Arial, sans-serif'],
      larsseitMedium: ['Larsseit-Medium, Arial, sans-serif'],
      larsseitMediumItalic: ['Larsseit-MediumItalic, Arial, sans-serif'],
      thin: ['Larsseit-Thin, Arial, sans-serif'],
      thinItalic: ['Larsseit-ThinItalic, Arial, sans-serif'],
      williamRegular: ['WilliamRegular, Arial, sans-serif'],
      williamItalic: ['WilliamRegular-Italic, Arial, sans-serif'],
      sfpro: ['SF Pro Text'],
    },
    colors: {
      red: '#E00000',
      grey: '#D6D6D6',
      dark: '#737373',
      black: '#000000',
    },

    letterSpacing: {
      link: '0.02em',
      '1': '0.01em',
      '2': '0.02em',
    },

    extend: {
      spacing: {
        '10': '10px',
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '15': '15px',
        '16': '16px',
        '17': '17px',
        '18': '18px',
        '20': '20px',
        '21': '21px',
        '24': '24px',
        '26': '26px',
        '30': '30px',
        '32': '32px',
        '40': '40px',
        '45': '45px',
        '50': '50px',
        '80': '80px',
        '100': '100px',
        '120': '120px',
        '130': '130px',
      },
      borderRadius: {},

      fontSize: {
        h1: ['78px', { lineHeight: 1.15 }],
        h2: ['48px', { lineHeight: 1.15 }],
        h3: ['32px', { lineHeight: 1.4 }],
        h4: ['26px', { lineHeight: 1.35 }],
        lg: ['24px', { lineHeight: 1.45 }],
        def: ['15px', { lineHeight: '21px' }],
        btn: ['24px', { lineHeight: '31px' }],
        cap: ['12px', { lineHeight: '15px' }],
        overline: ['13px', { lineHeight: 1.2 }],

        'h1-sm': ['40px', { lineHeight: 1.3 }],
        'h2-sm': ['32px', { lineHeight: 1.35 }],
        'h2-low-sm': ['32px', { lineHeight: 1.25 }],
        'h3-sm': ['24px', { lineHeight: 1.3 }],
        'h4-sm': ['22px', { lineHeight: 1.4 }],
        'lg-sm': ['18px', { lineHeight: 1.5 }],
        'def-sm': ['13px', { lineHeight: 1.5 }],
        'btn-sm': ['18px', { lineHeight: '23px' }],
        'cap-sm': ['12px', { lineHeight: '15px' }],
      },
    },
  },
  plugins: [formsPlugin],
});
