// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lm-orange": "#FFC007",
        "lm-black": "#17171C",
        "lm-zinc": "#A5AAB4",
        "lm-stone": "#F8F8FA",
        "lm-gray": "#2B2B30",
        "lm-slate": "#1E1E1E",
        "lm-neutral": "#2B2B30",
        "lm-textbg": "rgba(255, 192, 7, 0.5);",
      },
    },
    boxShadow: {
      "lm-shadow": "0px 8px 24px rgba(0, 0, 0, 0.04)",
    },
    fontFamily: {
      noto: ["Noto Sans", "sans-serif"],
      grotesk: ["Space Grotesk", "sans-serif"],
    },
    container: {
      center: true,
    },
    screens: {
      xl: "1200px",
      lg: "1024px",
      md: "820px",
      sm: "320px",
    },
  },

  plugins: [require("@tailwindcss/line-clamp"), require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
