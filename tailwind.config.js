/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jm: {
          red: "#BA001E",
          "blue-100": "#8EA7C7",
          "blue-200": "#6577AB",
          "blue-300": "#3A4F85",
        },
      },
    },
  },
  fontFamily: {
    hk: ["var(--font-sans-hk)"],
    javanese: ["var(--font-sans-javanese)"],
  },
  plugins: [],
};
