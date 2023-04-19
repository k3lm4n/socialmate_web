const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "47px",
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: "translateX(200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: "translateX(-200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: 1, transform: "translateX(0)" },
          to: { opacity: 0, transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: 0, transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: 1, transform: "rotateX(0deg) scale(1)" },
          to: { opacity: 0, transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        lideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          "0%": { opacity: 0, transform: "translateX(-2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideDownAndFade: {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          "0%": { opacity: 0, transform: "translateX(2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
    },
    animation: {
      scaleIn: "scaleIn 200ms ease",
      scaleOut: "scaleOut 200ms ease",
      fadeIn: "fadeIn 200ms ease",
      fadeOut: "fadeOut 200ms ease",
      enterFromLeft: "enterFromLeft 250ms ease",
      enterFromRight: "enterFromRight 250ms ease",
      exitToLeft: "exitToLeft 250ms ease",
      exitToRight: "exitToRight 250ms ease",
      slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideRightAndFade:
        "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    },
    colors: {
      white: "#fff",
      black: "#000",
      secondary: "#ECF5FF",
      accent: "#16C098",
      yellow: {
        50: "#fffaeb",
        100: "#fff1c6",
        200: "#ffe188",
        300: "#ffcb47",
        400: "#ffb620",
        500: "#f99307",
        600: "#dd6c02",
        700: "#b74a06",
        800: "#94380c",
        900: "#7a300d",
        950: "#461702",
      },
      green: {
        50: "#effaf3",
        100: "#d7f4df",
        200: "#b3e7c4",
        300: "#81d4a1",
        400: "#4dba7b",
        500: "#28965a",
        600: "#1c7f4b",
        700: "#16663e",
        800: "#145133",
        900: "#11432b",
        950: "#092519",
      },
      pink: "#CA79C6",
      grey: {
        50: "#f6f8f9",
        100: "#eceff2",
        200: "#cdd6dd",
        300: "#b0bfc9",
        400: "#859bab",
        500: "#658092",
        600: "#516778",
        700: "#425462",
        800: "#394853",
        900: "#333e47",
        950: "#22292f",
      },
      primary: {
        100: "#271E4A",
        200: "#1A2B88",
        300: "#0F1E54",
      },
      red: {
        50: "#fff0f1",
        100: "#ffe2e5",
        200: "#ffc9d2",
        300: "#ff9cac",
        400: "#ff6581",
        500: "#ff2f59",
        600: "#ec0b43",
        700: "#ce023a",
        800: "#ac0538",
        900: "#930837",
        950: "#520018",
      },
      blue: {
        50: "#ebfffd",
        100: "#cdfffe",
        200: "#a1fdff",
        300: "#60f9ff",
        400: "#18ebf8",
        500: "#00cede",
        600: "#00b2ca",
        700: "#088296",
        800: "#10687a",
        900: "#125667",
        950: "#053947",
      },
    },
    fontFamily: {
      poppins: ["Poppins", ...fontFamily.sans],
      kanit: ["Kanit", ...fontFamily.sans],
      sen: ["Sen", ...fontFamily.sans],
      productsans: ["Product Sans", ...fontFamily.sans],
      inter: ["Inter", ...fontFamily.sans],
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      "semi-bold": 600,
      bold: 700,
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
  ],
};
