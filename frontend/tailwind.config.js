/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-cream": "#EEEEEE",
        "vibrant-orange": "#F97300",
        "deep-brown": "#3E3232",
        "deep-blue": "#31363F",
      },
    },
  },
  plugins: [],
};
