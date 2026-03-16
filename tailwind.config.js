/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        beige: {
          50: "#faf8f5",
          100: "#f5f0e8",
          200: "#e8dfd0",
          300: "#d4c4a8",
          400: "#c4ad8a",
          500: "#b8996b",
        },
        gold: { 400: "#d4a853", 500: "#c4942e", 600: "#a67c1f" },
        anthracite: "#2c2c2c",
        anthraciteLight: "#4a4a4a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "fade-in-up":
          "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
