import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E6F6FD",
          300: "#66C7EB",
          500: "#009ADB",
          700: "#007BB0",
        },
        secondary: {
          100: "#FDE8E7",
          500: "#F14740",
          700: "#C93A34",
        },
        tertiary: {
          100: "#FFF5E1",
          500: "#FCAF35",
          700: "#D89A2A",
        },
        neutral: {
          100: "#F5F3F2",
          300: "#D7D2CF",
          500: "#7A6A64",
          700: "#4A3A34",
          900: "#291309",
        },
      },
    },
  },
  plugins: [],
};

export default config;