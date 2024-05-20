import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-custom": "#E42E54",
        "gray-custom": "#A0A0A0",
        "blue-custom": "#252C3C",
      },
    },
  },
  plugins: [],
};
export default config;
