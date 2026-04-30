import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f8f2ea",
        beige: "#efe4d4",
        cocoa: "#5b3a29",
        terracotta: "#bf6f53",
        sage: "#8faa8f",
        peach: "#f2c9b8"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(91, 58, 41, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
