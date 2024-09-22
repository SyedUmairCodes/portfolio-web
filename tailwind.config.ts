import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{(js, ts, tsx, jsx)}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: { sans: "var(--font-sans)" },
      colors: {
        main: "#15161A",
        secondary: "#343539",
        stripe: "#1b81ef",
      },
    },
  },
  plugins: [],
};
export default config;
