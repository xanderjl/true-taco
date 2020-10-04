import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { PseudoBox, Text } from "@chakra-ui/core"
import customTheme from "../gatsby-plugin-chakra-ui/theme"

const NavbarItem = ({ children, href, ...props }) => {
  const { colors } = customTheme
  return (
    <PseudoBox
      d="flex"
      alignItems="center"
      w={["100%", "max-content"]}
      h={["3.25rem", "4rem"]}
      p="0.5rem 0.75rem"
      color={colors.white}
      _hover={{ bg: colors.green[400] }}
      {...props}
    >
      <Link to={href ? href : "/"}>
        <Text fontSize={["lg", "xl"]}>{children}</Text>
      </Link>
    </PseudoBox>
  )
}

NavbarItem.propTypes = {
  href: PropTypes.string,
}

export default NavbarItem
