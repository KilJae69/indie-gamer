/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        sans: ["var(--font-exo-2)", "sans-serif"]
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

