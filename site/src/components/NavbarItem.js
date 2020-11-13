import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box, Text } from "@chakra-ui/react"

const ConditionalLink = ({ href, children }) =>
  href ? <Link to={href}>{children}</Link> : children

const NavbarItem = ({ children, href, ...props }) => {
  return (
    <ConditionalLink href={href}>
      <Box
        d="flex"
        alignItems="center"
        flex={1}
        w="100%"
        h={["3.25rem", "4rem"]}
        p="0.5rem 0.75rem"
        color="white"
        _hover={{ bg: "green.400" }}
        {...props}
      >
        <Text fontSize={["lg", "xl"]}>{children}</Text>
      </Box>
    </ConditionalLink>
  )
}

NavbarItem.propTypes = {
  href: PropTypes.string,
}

export default NavbarItem
