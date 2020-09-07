import React from "react"
import customTheme from "../styles/theme"
import { Box } from "@chakra-ui/core"

const Navbar = () => {
  const { colors } = customTheme
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg={colors.green[500]}
      padding="1rem"
    >
      <Box display="flex" alignItems="center" justifyContent="space-around">
        <Box m="0 1rem" color={colors.white}>Home</Box>
        <Box m="0 1rem" color={colors.white}>About Us</Box>
        <Box m="0 1rem" color={colors.white}>Menu</Box>
        <Box m="0 1rem" color={colors.white}>Contact</Box>
      </Box>
      <Box color={colors.white}>Takeout (n)</Box>
    </Box>
  )
}

export default Navbar
