import type { Config } from 'tailwindcss'

function withOpacity(variable: string) {
  return `rgb(var(${variable}) / <alpha-value>)`
}

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: withOpacity('--c-bg'),
        surface: withOpacity('--c-surface'),
        border: withOpacity('--c-border'),
        fg: withOpacity('--c-fg'),
        muted: withOpacity('--c-muted'),
        paper: withOpacity('--c-bg'),
        accent: {
          from: withOpacity('--c-accent-from'),
          to: withOpacity('--c-accent-to'),
          DEFAULT: withOpacity('--c-accent-from'),
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(120deg, #38BDF8 0%, #22D3EE 100%)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-14px,0)' },
        },
        'gradient-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        drift: 'drift 7s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 6s ease infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
