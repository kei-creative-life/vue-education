module.exports = {
  purge: [
    "components/**/*.{vue,js}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "plugins/**/*.{js,ts}",
    "nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue00: "#7db4e6",
        navy00: "#111827"
      },
      margin: {
        "10px": "10px"
      },
      padding: {
        "10px": "10px",
        "25px": "25px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [

  ],
}
