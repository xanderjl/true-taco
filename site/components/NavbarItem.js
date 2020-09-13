import React from "react"
import { PseudoBox } from "@chakra-ui/core"
import customTheme from "../styles/theme"

const NavbarItem = ({ children }) => {
  const { colors } = customTheme
  return (
    <PseudoBox
      p="1.25rem .5rem"
      color={colors.white}
      _hover={{ bg: colors.green[400] }}
    >
      {children}
    </PseudoBox>
  )
}

export default NavbarItem
