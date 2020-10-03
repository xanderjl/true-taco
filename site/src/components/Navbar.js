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
  return (
    <Box
      minH="72px"
      bg={colors.green.light}
      p="0 0.75rem"
      position="fixed"
      left="0"
      right="0"
      zIndex="1"
    >
      <Container>
        <Flex alignItems={["flex-start", "center"]}>
          <Box
            d={[!isOpen && `none`, "flex"]}
            justifyContent="space-between"
            bg={colors.green.light}
            w="100vw"
            position={["fixed", "static"]}
            top="72px"
            left="0"
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
            top={["0.75rem", "1rem", ".75rem"]}
            right="1.25rem"
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
          w={["3rem", "6rem", "8rem"]}
          h="auto"
          src={Logo}
          alt="True Taco logo"
          pos="absolute"
          top={["0.75rem", "1rem", ".75rem"]}
          left={["1.75rem", "50%"]}
          transform="translateX(-25%)"
        />
      </Link>
    </Box>
  )
}

export default Navbar
