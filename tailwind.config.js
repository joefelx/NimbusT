/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // black: "#15191e",
        // black: "#050505",
        // black: "#000000",
        // black: "hsl(231, 100%, 3%)",
        // black: "#0f172a",
        // black: "#1a1c22",
        black: "#0e1218",
        white: "#ffffff",
        // lightGrey: "#1a1c22",

        frostedWhite: "#f1f2f4",
        // frostedBlack: "#0b0c0d",
        // frostedBlack: "#212121",
        // frostedBlack: "#222831",
        frostedBlack: "#000000",
      },
    },
  },
  plugins: [],
};
