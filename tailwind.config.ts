module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Dark mode'u sınıflarla kontrol edeceğiz
  theme: {
    extend: {
      colors: {
        primary: "#8A2BE2", // Mor tonlar
        secondary: "#FFFFFF", // Beyaz
        background: "#121212", // Siyah
        accent: "#BB86FC", // Daha açık mor
      },
    },
  },
  plugins: [],
};
  