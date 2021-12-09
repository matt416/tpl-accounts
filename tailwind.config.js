module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "tpl-blue": "#005fc0",
        "blue": {
          dark: "#001C71"
        }
      },
      fontFamily: {
        sans: '"Open Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'
      },
      fontSize: {
        16: "1rem",
        20: "1.25rem",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}