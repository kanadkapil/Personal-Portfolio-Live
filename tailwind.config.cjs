/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        brutal: "4px 4px 0px 0px rgba(0,0,0,1)",
        "brutal-lg": "8px 8px 0px 0px rgba(0,0,0,1)",
        "brutal-xl": "12px 12px 0px 0px rgba(0,0,0,1)",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        brutalist: {
          primary: "#fbbf24",
          secondary: "#22d3ee",
          accent: "#f472b6",
          neutral: "#000000",
          "base-100": "#ffffff",
          info: "#3b82f6",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",
          "--tab-radius": "0",
        },
      },
      "light",
      "dark",
    ],
  },
};
