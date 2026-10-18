import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

/**
 * Tailwind theme for the Bigotes de San Vicente design system.
 *
 * Colours and shadows read CSS variables defined in assets/css/main.css, so the
 * Día (light) and Noche (dark) themes switch automatically: no `dark:` variants
 * are needed for anything that uses these tokens.
 *
 * The colour, font-size, radius and shadow scales REPLACE Tailwind's defaults on
 * purpose: only the design system's values exist, so off-system styles fail loudly.
 */

const color = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`

const colorNames = [
  'surface', 'surface-raised', 'surface-sunk',
  'line', 'line-strong',
  'ink', 'ink-muted',
  'tangerine', 'tangerine-soft', 'tangerine-text', 'on-tangerine',
  'sun', 'sun-soft', 'on-sun',
  'sea', 'sea-soft', 'on-sea',
  'pink', 'pink-soft', 'berry',
  'brick', 'brick-soft',
  'link', 'focus-ring',
] as const

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue',
  ],

  // Themes follow the OS by default; add `dark` or `light` to <html> to force one.
  darkMode: 'class',

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      ...Object.fromEntries(colorNames.map((n) => [n, color(n)])),
    },

    fontFamily: {
      serif: ['Fraunces', 'Georgia', '"Times New Roman"', 'serif'],
      sans: ['Figtree', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
    },

    // [size, { lineHeight, letterSpacing, fontWeight }]: pair with font-serif / font-sans
    fontSize: {
      // Display (Fraunces)
      'display-xl': ['64px', { lineHeight: '66px', letterSpacing: '-0.02em', fontWeight: '500' }],
      display: ['44px', { lineHeight: '50px', letterSpacing: '-0.015em', fontWeight: '500' }],
      title: ['32px', { lineHeight: '38px', letterSpacing: '-0.01em', fontWeight: '500' }],
      heading: ['21px', { lineHeight: '28px', fontWeight: '600' }],
      price: ['24px', { lineHeight: '28px', fontWeight: '500' }],
      quote: ['26px', { lineHeight: '36px', fontWeight: '400' }], // add `italic`
      // Text (Figtree)
      eyebrow: ['12px', { lineHeight: '16px', letterSpacing: '0.14em', fontWeight: '700' }],
      'body-lg': ['19px', { lineHeight: '30px', fontWeight: '400' }],
      body: ['16px', { lineHeight: '25px', fontWeight: '400' }],
      label: ['15px', { lineHeight: '20px', fontWeight: '600' }],
      caption: ['13px', { lineHeight: '18px', fontWeight: '500' }],
    },

    borderRadius: {
      none: '0',
      sm: '8px', // inputs, small image wells
      md: '14px', // notices, menus
      lg: '24px', // cards, colour sections, arch bottoms
      pill: '999px', // buttons, badges, chips, meter, toggle, arch tops
      full: '9999px',
    },

    boxShadow: {
      none: 'none',
      sm: 'var(--shadow-sm)', // primary button at rest, selected toggle
      md: 'var(--shadow-md)', // wish cards, hover
      lg: 'var(--shadow-lg)', // arch photos, hero card, once per section
    },

    extend: {
      // Design-system spacing keeps its own names (p-space-4, gap-space-5, py-space-8)
      // so it never collides with Tailwind's numeric scale, which stays available.
      spacing: {
        'space-1': '4px',
        'space-2': '8px',
        'space-3': '12px',
        'space-4': '16px',
        'space-5': '24px',
        'space-6': '32px',
        'space-7': '48px',
        'space-8': '80px',
      },
      borderWidth: {
        thin: '1px',
        ornament: '2px',
      },
      strokeWidth: {
        ornament: '2px',
      },
      aspectRatio: {
        arch: '4 / 5',
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
    },
  },

  plugins: [
    plugin(({ addBase, addUtilities }) => {
      addBase({
        body: {
          backgroundColor: color('surface').replace('<alpha-value>', '1'),
          color: color('ink').replace('<alpha-value>', '1'),
          fontFamily: 'Figtree, system-ui, -apple-system, "Segoe UI", sans-serif',
          fontSize: '16px',
          lineHeight: '25px',
        },
        a: {
          color: color('link').replace('<alpha-value>', '1'),
          textDecoration: 'underline',
        },
        // Keyboard focus: solid 3px sea ring with a 2px gap
        ':focus-visible': {
          outline: '3px solid rgb(var(--color-focus-ring))',
          outlineOffset: '2px',
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            transitionDuration: '0.01ms !important',
            animationDuration: '0.01ms !important',
          },
        },
      })

      addUtilities({
        // Buttons lift 2px on hover and settle when pressed
        '.lift': {
          transitionProperty: 'transform, box-shadow',
          transitionDuration: '150ms',
          '&:hover': { transform: 'translateY(-2px)' },
          '&:active': { transform: 'translateY(0)' },
        },
      })
    }),
  ],
} satisfies Config
