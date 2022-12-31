// ./images/bg-pattern-top-desktop.svg'/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      mb: "375px",
      tb: "600px",
      ltb: "900px",
      dt: "1200px",
    },

    extend: {
      keyframes: {
        bottom: {
          "0%": { transform: "translateY(100%) " },
          "100%": { transform: "translateY(0%) " },
        },
        right: {
          "0%": { transform: " translateX(100%) translateY(-100%)" },
          "100%": { transform: "translateX(0%) translateY(0%)" },
        },
        bottomright: {
          "0%": { transform: " translateX(100%) translateY(100%)" },
          "100%": { transform: "translateX(0%) translateY(0%)" },
        },
        left: {
          "0%": { transform: " translateX(-100%) translateY(-100%)" },
          "100%": { transform: "translateX(0%) translateY(0%)" },
        },
        bottomleft: {
          "0%": { transform: " translateX(-100%) translateY(100%)" },
          "100%": { transform: "translateX(0%) translateY(0%)" },
        },
      },
      animation: {
        BottomEntrance: "bottom .5s linear",
        LeftEntrance: "left .5s linear",
        RightEntrance: "right .5s linear",
        BottomRightEntrance: "bottomright .5s linear",
        BottomLeftEntrance: "bottomleft .5s linear",
      },
      backgroundImage: {
        gradientText:
          "linear-gradient(to right bottom,  rgba(80, 32, 80, 0.863), rgba(238, 104, 164, 0.712))",
        gradientBg:
          "linear-gradient(to right bottom,  rgba(80, 32, 80, 0.863),  rgba(128, 44, 108, 0.863))",
      },
      colors: {
        VeryDarkMagenta: "hsl(300, 43%, 22%)",
        SoftPink: "hsl(333, 80%, 67%)",
        DarkGrayishMagenta: "hsl(303, 10%, 53%)",
        LightGrayishMagenta: "hsl(300, 24%, 96%)",
        White: "hsl(0, 0%, 100%)",
        Yellow: "#EF9546",
      },

      fontFamily: {
        league: ["League Spartan, san-serif"],
      },
    },
  },
  plugins: [],
};
