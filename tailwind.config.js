module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.js", "./src/**/*.jsx"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
