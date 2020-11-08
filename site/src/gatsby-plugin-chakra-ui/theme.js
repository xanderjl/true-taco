import React from "react"
import { extendTheme } from "@chakra-ui/core"

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 400,
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
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
      50: "#fdeaee",
      100: "#fbcbd3",
      200: "#ea979c",
      300: "#de6f76",
      400: "#e84c55",
      500: "#ed393d",
      600: "#de2f3c",
      700: "#cc2535",
      800: "#bf1e2e",
      900: "#b01023",
    },
    green: {
      50: "#e5f6eb",
      100: "#c0e8cf",
      200: "#98d9b0",
      300: "#6aca91",
      400: "#44bf7a",
      500: "#00b362",
      600: "#00a458",
      700: "#00914c",
      800: "#008040",
      900: "#00612c",
    },
  },
})

export default theme
