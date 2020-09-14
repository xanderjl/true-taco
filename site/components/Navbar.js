/** @jsx jsx */
import { useState } from "react"
import Link from "next/link"
import { Box, Flex, Icon, Image } from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import customTheme from "../styles/theme"
import NavbarItem from "../components/NavbarItem"
import Container from "../components/Container"
import Hamburger from "hamburger-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { colors } = customTheme
  return (
    <Box minH="72px" bg={colors.green.light} p="0 0.75rem">
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" justifyContent="space-around">
            <NavbarItem href="/">Home</NavbarItem>
            <NavbarItem>About Us</NavbarItem>
            <NavbarItem>Menu</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
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
      <Link href="/">
        <a>
          <Image
            zIndex="1"
            w="6rem"
            h="auto"
            src="/logo/2.svg"
            alt="True Taco logo"
            pos="absolute"
            top="1rem"
            left="50%"
            transform="translateX(-25%)"
          />
        </a>
      </Link>
    </Box>
  )
}

export default Navbar
