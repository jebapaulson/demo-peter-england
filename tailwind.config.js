/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "marquee 20s linear 0s infinite forwards",
        'scroll-up': 'scroll-up 10s infinite ease-in-out',
      },  fontSize: {
        '8px': '8px',
        "10px":"10px",
        "12px":"12px",
        "14px":"14px",
        "21px":"21px",
        "24px":"24px"
      },  fontFamily: {
        cabin: ['Cabin', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "50%":{transform:"translateY(0)"},
          "100%": { transform: "translateX(-100%)" },
        },
        'scroll-up': {
          '0%, 25%': { transform: 'translateY(100%)', opacity: 0 },
          '30%, 55%': { transform: 'translateY(0)', opacity: 1 },
          '60%, 100%': { transform: 'translateY(-100%)', opacity: 0 },
        },
      },
    },  colors: {
      "custom-green": "rgb(0, 115, 74)",
      "custom-white": "rgb(255,255,255)",
      "black":"rgb(0,0,0,0.87)",
      "gray":"#555",
      "custom-black":"#222",
      "yellow":"rgb(245, 200, 66)",
      "red":"rgb(191, 10, 10)",
      "blue":"#16325c"
    },
  },
  plugins: [],
};
