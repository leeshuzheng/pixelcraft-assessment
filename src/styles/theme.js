const theme = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    yellow: "#ffd600",
    cyan: "#00b9e1",
    cyan2: "#4adbfb",
    cyan3: "#02A5C9",
    cyan4: "#00456C",
    cyan5: "#33DAFF",
    cyan6: "#008DCA",
    cyan7: "#3BCCFF",
    magenta: "#c82ac2",
    magenta2: "#f31ced",
    magenta3: "#ff7bfb",
    magenta4: "#F643F0",
    magenta5: "#3D003A",
    magenta6: "#A712A1",
    magenta7: "#F934F3",
    purple: "#a065ff",
    purple2: "#8348FF",
    purple3: "#9B6CFF",
    purple4: "#5F2EC8",
    purple5: "#3D0980",
    green: "#52BB34",
    red: "#DF2B25",
  },
  backgroundImage: {
    "parcel-dashboard": "url('/assets/images/parcel-dashboard-bg.png')",
    "welcome-queue": "url('/assets/images/welcome-bg.png')",
    lines: "url('/assets/images/Lines.svg')",
    "lines-mobile": "url('/assets/images/Lines-mobile.png')",
    "grey-gradient-bottom":
      "radial-gradient(50% 2354449.91% at 50% 99.92%, #FFFFFF 0%, rgba(185, 185, 185, 0.4) 100%);",
    "magenta-gradient-bottom":
      "radial-gradient(50% 2354449.91% at 50% 99.92%, #C82AC2 0%, rgba(200, 42, 194, 0.4) 100%)",
    "gradient-yellow":
      "linear-gradient(180deg, rgba(255, 214, 0, 0.34) 0%, rgba(255, 214, 0, 0) 43.91%, rgba(255, 214, 0, 0) 65.5%), linear-gradient(180deg, rgba(0, 0, 0, 0.45) 27.8%, rgba(0, 0, 0, 0) 73.65%);",
    "gradient-cyan":
      "linear-gradient(180deg, rgba(0, 185, 225, 0.5) 17.01%, rgba(0, 185, 225, 0) 96.53%), linear-gradient(180deg, rgba(0, 0, 0, 0.4) 17.01%, rgba(0, 0, 0, 0) 96.53%);",
    "gradient-magenta":
      "linear-gradient(180deg, rgba(200, 42, 194, 0) 0%, rgba(200, 42, 194, 0.45) 93.23%);",
    "gradient-magenta2":
      "linear-gradient(180deg, rgba(200, 42, 194, 0.4) 0%, rgba(200, 42, 194, 0.2) 105.15%);",
    "gradient-magenta3":
      "linear-gradient(270deg, rgba(200, 42, 194, 0) -15.34%, rgba(200, 42, 194, 0.45) 100%)",
    "gradient-grey":
      "linear-gradient(180deg, rgba(105, 105, 105, 0) 0%, rgba(143, 118, 142, 0.45) 93.23%);",
  },
  fontFamily: {
    alien: ["var(--font-alien)", "sans-serif"],
    pixelar: ["var(--font-pixelar)", "sans-serif"],
  },
  extend: {
    boxShadow: {
      "xs-magenta": "0px 0px 5px #C82AC2, 0px 0px 5px #C82AC2",
      "sm-magenta": "0px 0px 10px 4px rgba(200, 42, 194, 0.8);",
      "md-magenta": "-4px -4px 8px #C82AC2, 4px 4px 14px #C82AC2;",
    },
  },
};

module.exports = { theme };
