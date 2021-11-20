module.exports = {
  mode: '',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        ping: 'ping 2500ms cubic-bezier(0, 0, 0.2, 1) infinite;',
        fadeIn: 'fadeIn 2s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  variants: {
    animation: ['motion-safe'],
    extend: {},
  },
  plugins: [],
};
