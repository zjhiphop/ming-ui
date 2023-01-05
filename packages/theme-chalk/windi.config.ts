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
      // brand
      primary: '#114B5F',
      primaryCta: 'rgba(17, 75, 95, 0.1)',
      primaryTransparent: 'rgba(17, 75, 95, 0.1)',
      recycleCta: '#70C9BF',
      recycleCtaTransparent: 'rgba(112, 201, 191, 0.2)',
      donate: '#2694B8',
      donateTransparent: 'rgba(38, 148, 184, 0.15)',

      // state
      success: '#93D500',
      danger: '#EE2722',
      fair: '#F4AD42',
      pressOverlay: 'rgba(37, 39, 44, 0.05)',
      backgroundOverlay: 'rgba(0, 0, 0, 0.6)',
      successTransparent: 'rgba(147, 213, 0, 0.15)',
      dangerTransparent: 'rgba(238, 39, 34, 0.1)',
      failTransparent: 'rgba(244, 173, 66, 0.15)',
      hoverOverlayBlack4: 'rgba(27, 28, 31, 0.04)',
      hoverOverlayBlack2: 'rgba(0, 0, 0, 0.02)',
      hoverOverlayWhite60: 'rgba(255, 255, 255, 0.6)',
      hoverOverlayWhite30: 'rgba(255, 255, 255, 0.3)',
      hoverOverlayWhite12: 'rgba(255, 255, 255, 0.12)',

      // dark
      darkBlack: '#2D2F2D',
      darkSecondary: '#4C5457',
      darkTertiary: '#6D787B',
      darkQuaternary: '#849296',

      // light
      lightWhite: '#FFFFFF',
      lightSecondary: '#F2F5F6',
      lightTertiary: '#CAD9DD',
      lightQuaternary: '#B7C6CA',
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
