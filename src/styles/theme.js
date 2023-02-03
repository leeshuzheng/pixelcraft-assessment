const theme = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    yellow: "#ffd600",
    cyan: "#00b9e1",
    cyan2: "#4adbfb",
    magenta: "#c82ac2",
    magenta2: "#f31ced",
    magenta3: "#ff7bfb",
    purple: "#a065ff",
  },
  backgroundImage: {
    "parcel-dashboard": "url('/assets/images/parcel-dashboard-bg.png')",
    "welcome-queue": "url('/assets/images/welcome-bg.png')",
    lines: "url('/assets/images/Lines.svg')",
    "gradient-yellow":
      "linear-gradient(179.98deg, rgba(255, 214, 0, 0.4) 2.93%, rgba(255, 214, 0, 0) 43.91%, rgba(255, 214, 0, 0.024) 65.5%), linear-gradient(180deg, rgba(0, 0, 0, 0.45) 27.8%, rgba(0, 0, 0, 0) 73.65%);",
    "gradient-cyan":
      "linear-gradient(180deg, rgba(0, 185, 225, 0.5) 17.01%, rgba(0, 185, 225, 0) 96.53%), linear-gradient(180deg, rgba(0, 0, 0, 0.4) 17.01%, rgba(0, 0, 0, 0) 96.53%);",
    "gradient-magenta":
      "linear-gradient(180deg, rgba(200, 42, 194, 0) 0%, rgba(200, 42, 194, 0.45) 93.23%);",
    "gradient-grey":
      "linear-gradient(180deg, rgba(105, 105, 105, 0) 0%, rgba(143, 118, 142, 0.45) 93.23%);",
  },
  fontFamily: {
    alien: ["var(--font-alien)", "sans-serif"],
    pixelar: ["var(--font-pixelar)", "sans-serif"],
  },
  extend: {
    boxShadow: {
      "sm-magenta": "0px 0px 10px 4px rgba(200, 42, 194, 0.8);",
      "md-magenta": "-4px -4px 8px #C82AC2, 4px 4px 14px #C82AC2;",
    },
  },
};

module.exports = { theme };
