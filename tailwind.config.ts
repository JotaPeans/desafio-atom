import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "principal-purple": "#290742",
        "principal-light-purple": "#9e6dc2"
      },
      fontFamily: {
        Caveat: ["Caveat", "cursive"]
      },
      keyframes: {
        error: {
          "0%, 100%": {
            opacity: "0"
          },
          "10%, 90%": {
            opacity: "100%"
          },
        },
        modal: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          }
        }
      },
      animation: {
        error: "error 3s ease-in-out",
        modal: "modal 0.2s ease",
      }
    },
  },
  plugins: [],
};
export default config;
