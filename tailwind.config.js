/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        heading: ["var(--font-playfair)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        isabelline: "#EFF1ED",
        feldgrau: "#505A5B",
        saltpan: "#E8EBE4",
      },
    },
  },
  plugins: [],
};
