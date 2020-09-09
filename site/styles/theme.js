import { theme } from "@chakra-ui/core"

const customTheme = {
  ...theme,
  breakpoints: ["769px", "1024px", "1216px", "1408px"],
  fonts: {
    heading: "'Sunset Boulevard', sans-serif",
    banner: "'York White Letter', sans-serif",
    body: "'Lato', sans-serif",
  },
  colors: {
    ...theme.colors,
    red: {
      ...theme.colors.red,
      dark: "#BF1E2D",
      light: "#FF2E42",
    },
    green: {
      ...theme.colors.green,
      dark: "#006838",
      light: "#00B361",
      lime: "#A9CF37",
    },
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
}

export default customTheme
