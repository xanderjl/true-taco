import React, { useState } from "react"
import { Link } from "gatsby"
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/core"
import customTheme from "../gatsby-plugin-chakra-ui/theme"
import NavbarItem from "../components/NavbarItem"
import Container from "../components/Container"
import CartPopover from "../components/CartPopover"
import Hamburger from "hamburger-react"
import Logo from "../images/logo/2.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { colors } = customTheme

  // TODO: Fix navItem styling
  return (
    <Box
      h="3.25rem"
      p="0 0.75rem"
      position="fixed"
      left="0"
      right="0"
      zIndex="1"
      bg={colors.green.light}
    >
      <Container>
        <Flex alignItems={["flex-start", "center"]}>
          <Box
            w="100vw"
            position={["fixed", "static"]}
            top="3.25rem"
            left="0"
            d={[!isOpen && "none", "flex"]}
            justifyContent="space-between"
            alignItems="center"
            bg={colors.green.light}
          >
            <Flex
              direction={["column", "row"]}
              alignItems={["flex-start", "center"]}
              justifyContent="space-around"
            >
              <NavbarItem href="/">Home</NavbarItem>
              <NavbarItem href="/catering">Catering</NavbarItem>
            </Flex>
            <NavbarItem>
              <CartPopover />
            </NavbarItem>
          </Box>
          <Box
            d={["flex", "none"]}
            w="100%"
            h="100%"
            justifyContent="flex-end"
            pos="absolute"
            top="0rem"
            right="0.75rem"
          >
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
          w={["2.75rem", "6rem"]}
          h="auto"
          src={Logo}
          alt="True Taco logo"
          pos="absolute"
          top={["0.25rem", "0.75rem"]}
          left={["1.2rem", "50%"]}
          transform="translateX(-25%)"
        />
      </Link>
    </Box>
  )
}

export default Navbar
