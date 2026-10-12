/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Taken from the things on the page: the chalk wall and tie-dye shirt in the photo,
        // Mochi's pink, and Minecraft grass for "open to work".
        chalk: "#F3F7F9",
        ink: "#14202B",
        slate: "#4A5866",
        sky: "#8CCBE6",
        skydeep: "#2F7FA6",
        pig: "#F29BB0",
        pigdeep: "#C9667F",
        grass: "#5FAE4E",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
