/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08080c',
        surface: '#0e0e14',
        'surface-2': '#14141c',
        'border-default': 'rgba(255,255,255,0.08)',
        'border-strong': 'rgba(255,255,255,0.14)',
        text: '#f2f2f5',
        'text-muted': '#9a9aa8',
        'text-dim': '#62626f',
        primary: '#7b39fc',
        accent: '#f87b52',
        navy: '#0f1530',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        caption: ['Cabin', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid type scale — defined once, used everywhere
        hero:   ['clamp(2.5rem, 7vw, 6rem)',   { lineHeight: '1.0',  letterSpacing: '-0.02em' }],
        'display-2': ['clamp(2rem, 4.6vw, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'h3-fluid': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.25' }],
        // Named for legacy compatibility
        spec: ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.14em' }],
      },
      maxWidth: {
        prose: '60ch',
        narrow: '52ch',
        container: '1280px',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        34: '8.5rem',
        36: '9rem',
        40: '10rem',
      },
      zIndex: {
        nav: '50',
        overlay: '60',
        modal: '70',
        cursor: '80',
        toast: '90',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'draw-line': 'drawLine 1.2s ease-out forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'scroll-indicator': 'scrollIndicator 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.5)' },
        },
        scrollIndicator: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.3' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
