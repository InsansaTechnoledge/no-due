// Tailwind v4 — minimal config just for Flowbite
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",

    // 👇 add Flowbite + Flowbite-React so Tailwind sees their classes
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [flowbite],
};
