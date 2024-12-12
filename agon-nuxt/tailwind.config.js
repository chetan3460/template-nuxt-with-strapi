const gray = {
  0: 'var(--gray-0)',
  100: 'var(--gray-100)',
  200: 'var(--gray-200)',
  300: 'var(--gray-300)',
  400: 'var(--gray-400)',
  500: 'var(--gray-500)',
  600: 'var(--gray-600)',
  700: 'var(--gray-700)',
  800: 'var(--gray-800)',
  850: 'var(--gray-850)',
  900: 'var(--gray-900)',
};

const colorSystem = {
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
  success: 'var(--success)',
  danger: 'var(--danger)',
  warning: 'var(--warning)',
  info: 'var(--info)',
};

const colorPaltte = {
  'green-900': 'var(--green-900)',
  'green-500': 'var(--green-500)',
  'green-100': 'var(--green-100)',
  'green-1000': 'var(--green-1000)',
  'orange-100': 'var(--orange-100)',
  'orange-500': 'var(--orange-500)',
  'orange-900': 'var(--orange-900)',
};

const colorBackground = {
  'bg-1': 'var(--bg-1)',
  'bg-2': 'var(--bg-2)',
  'bg-3': 'var(--bg-3)',
  'bg-4': 'var(--bg-4)',
  'bg-5': 'var(--bg-5)',
  'bg-6': 'var(--bg-6)',
  'bg-7': 'var(--bg-7)',
  'bg-8': 'var(--bg-8)',
  'bg-9': 'var(--bg-9)',
  'bg-10': 'var(--bg-10)',
};

const typography = {
  'display-1': [
    '96px',
    {
      lineHeight: '132px',
      letterSpacing: '-0.01em',
    },
  ],
  'display-2': [
    '80px',
    {
      lineHeight: '88px',
      letterSpacing: '-0.005em',
    },
  ],
  'display-3': [
    '64px',
    {
      lineHeight: '72px',
    },
  ],
  'display-4': [
    '56px',
    {
      lineHeight: '67px',
    },
  ],
  'heading-1': [
    '56px',
    {
      lineHeight: '64px',
      letterSpacing: '-0.01em',
    },
  ],
  'heading-2': [
    '42px',
    {
      lineHeight: '44px',
    },
  ],
  'heading-3': [
    '35px',
    {
      lineHeight: '38px',
    },
  ],
  'heading-4': [
    '28px',
    {
      lineHeight: '32px',
    },
  ],
  'heading-5': [
    '22px',
    {
      lineHeight: '24px',
    },
  ],
  'heading-6': [
    '18px',
    {
      lineHeight: '22px',
    },
  ],
  md: ['14px', '19px'],
  lead: ['16px', '24px'],
  'lead-lg': ['24px', '32px'],
  excerpt: ['18px', '26px'],
  text: ['16px', '28px'],
  quote: ['20px', '28px'],
  capitalized: [
    '14px',
    {
      lineHeight: '19px',
      letterSpacing: '2px',
    },
  ],
  sm: ['12px', '16px'],
  tiny: ['10px', '14px'],
};

module.exports = {
  content: ['src/views/*.pug', 'dist/*.html'],
  theme: {
    extend: {
      backgroundImage: {},
      backgroundSize: {},
      colors: {
        gray,
        ...colorPaltte,
        ...colorSystem,
        ...colorBackground,
      },
      fontSize: {
        ...typography,
      },
      fontFamily: {
        chivo: ['Chivo', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'hero-thumb-sm-animation': {
          '0%': {
            transform: 'translateX(50px)',
          },
          '100%': {
            transform: 'translateX(0px)',
          },
        },
      },
      animation: {
        float: 'float 2s linear infinite alternate',
        'float-md': 'float 4s linear infinite alternate',
        'hero-thumb-sm-animation':
          'hero-thumb-sm-animation 4s linear infinite alternate',
        'hero-thumb-md-animation':
          'hero-thumb-sm-animation 2s linear infinite alternate',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
};
