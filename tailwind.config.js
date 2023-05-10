const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  daisyui: {
    themes: false,
    base: false,
  },
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
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
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
      bounce: "bounce 1s infinite",
    },
    colors: {
      white: "#fff",
      black: "#000",
      secondary: "#4ABEFF",
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
        50: "#eefffa",
        100: "#c6fff2",
        200: "#8cffe6",
        300: "#4bfdd7",
        400: "#13deb9",
        500: "#00cfac",
        600: "#00a78e",
        700: "#018473",
        800: "#06695c",
        900: "#0b564d",
        950: "#003531",
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
        50: "#fef5f2",
        100: "#fee8e2",
        200: "#fed5ca",
        300: "#fdb7a4",
        400: "#f98a6b",
        500: "#f16842",
        600: "#de4d24",
        700: "#ba3e1b",
        800: "#9a361a",
        900: "#80321c",
        950: "#461609",
      },
      blue: {
        50: "#eef3ff",
        100: "#dae3ff",
        200: "#bdcfff",
        300: "#90b1ff",
        400: "#5d88ff",
        500: "#355dfc",
        600: "#1f3bf1",
        700: "#1727de",
        800: "#1922b4",
        900: "#1a238e",
        950: "#151856",
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
    require("daisyui"),
  ],
};
