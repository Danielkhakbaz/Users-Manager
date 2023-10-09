import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./layout/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
