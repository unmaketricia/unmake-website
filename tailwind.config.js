/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#3D6B7A",
          deep: "#2C505C",
          tint: "#E4ECEF",
        },
        fig: {
          DEFAULT: "#8B4F5E",
          deep: "#6E3C49",
        },
        ink: "#1F1F1B",
        linen: "#EFEEE9",
        cream: "#FFFAF6",
        gold: "#C9B99A",
        muted: "#6B6A62",
        line: "#E3DED2",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        serif: ["var(--font-lora)", "serif"],
      },
      borderRadius: {
        card: "18px",
      },
      maxWidth: {
        wrap: "1120px",
      },
    },
  },
  plugins: [],
};
