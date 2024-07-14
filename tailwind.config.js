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
      fontFamily: {
        hk: ["var(--font-hk)"],
        javanese: ["var(--font-javanese)"],
      },
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
  plugins: [],
};
