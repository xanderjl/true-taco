import React from "react"
import { extendTheme } from "@chakra-ui/core"

const theme = extendTheme({
  styles: {
    global: {
      a: {
        _hover: {
          textDecor: "none",
        },
      },
    },
  },
  maxWidth: "1440px",
  breakpoints: ["769px", "1024px", "1216px", "1408px"],
  fonts: {
    heading: "'Sunset Boulevard', sans-serif",
    banner: "'York White Letter', sans-serif",
    body: "'Lato', sans-serif",
  },
  colors: {
    red: {
      dark: "#BF1E2D",
      light: "#FF2E42",
    },
    green: {
      dark: "#006838",
      light: "#00B361",
      lime: "#A9CF37",
    },
  },
})

export default theme
