const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: '',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      opacity: {
        99: '0.99',
      },
      typography(theme) {
        return {
          quoteless: {
            css: {
              'blockquote p:first-of-type::before': { content: 'none' },
              'blockquote p:first-of-type::after': { content: 'none' },
            },
          },
          dark: {
            css: {
              color: theme('colors.gray.400'),
              '[class~="lead"]': { color: theme('colors.gray.400') },
              a: { color: theme('colors.gray.100') },
              strong: { color: theme('colors.gray.100') },
              'ul > li::before': { backgroundColor: theme('colors.gray.700') },
              hr: { borderColor: theme('colors.blue.500') },
              blockquote: {
                color: theme('colors.gray.400'),
                borderLeftColor: theme('colors.blue.500'),
              },
              h1: { color: theme('colors.gray.600') },
              h2: { color: theme('colors.gray.600') },
              h3: { color: theme('colors.gray.600') },
              h4: { color: theme('colors.gray.600') },
              code: { color: theme('colors.gray.600') },
              'a code': { color: theme('colors.gray.600') },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.gray.100'),
                borderBottomColor: theme('colors.gray.700'),
              },
              'tbody tr': { borderBottomColor: theme('colors.gray.800') },
            },
          },
        };
      },
      animation: {
        ping: 'ping 2500ms cubic-bezier(0, 0, 0.2, 1) infinite;',
        fadeIn: 'fadeIn 2s ease-in forwards',
        spin: 'spin 500ms linear',
        spinFast: 'spin 150ms linear',
        spinLoading: 'spin 700ms linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  // variants: {
  //   animation: ['motion-safe'],
  //   extend: { typography: ['dark'] },
  // },

  plugins: [
    require('@tailwindcss/typography'),
    //Enable frost nav for firefox
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
