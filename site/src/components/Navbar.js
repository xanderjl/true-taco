/** @jsx jsx */
import React, { useState } from "react"
import { Link } from "gatsby"
import { Box, Flex, Icon, Image } from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import customTheme from "../gatsby-plugin-chakra-ui/theme"
import NavbarItem from "../components/NavbarItem"
import Container from "../components/Container"
import Hamburger from "hamburger-react"
import Logo from "../images/logo/2.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { colors } = customTheme
  return (
    <Box h="72px" bg={colors.green.light} p="0 0.75rem">
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" justifyContent="space-around">
            <NavbarItem href="/">Home</NavbarItem>
            <NavbarItem href="/menu">Menu</NavbarItem>
            <NavbarItem href="/catering">Catering</NavbarItem>
          </Flex>
          <NavbarItem>
            Takeout (n){" "}
            <Icon name="brownBag" w="auto" height="2rem" ml="0.75rem" />
          </NavbarItem>
          <Box d={["inline-block", "none"]}>
            <Hamburger
              toggle={setIsOpen}
              toggled={isOpen}
              color={colors.white}
            />
          </Box>
        </Flex>
      </Container>
      <Link to="/">
        <Image
          zIndex="1"
          w="6rem"
          h="auto"
          src={Logo}
          alt="True Taco logo"
          pos="absolute"
          top="1rem"
          left="50%"
          transform="translateX(-25%)"
        />
      </Link>
    </Box>
  )
}

export default Navbar
