import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      purple900: "#261945",
      purple700: "#7907D5",
      purple500: "#A473FD",
      white: "#ffffff",
      gray900: "#171B1D",
      gray800: "#1E2128",
      gray500: "#282E3C",
      gray300: "#c4c4cc",
      gray100: "#e1e1e6",

      green500: "#00875f",
      green300: "#00b37e",
      green100: "#5AFBA0",

      //gradients
      gradientBgPurple:
        "linear-gradient(174.43deg, #261945 0.65%, #1E2128 49.46%, #171B1D 99.3%)",
      gradientButtonPurple:
        "linear-gradient(135.17deg, #7907D5 -54.16%, #A16AFA 141.67%)",
    },

    fontSizes: {
      sm: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
});
