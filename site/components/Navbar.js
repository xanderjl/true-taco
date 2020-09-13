import React from "react"
import NavbarItem from "../components/NavbarItem"
import customTheme from "../styles/theme"
import { Image, Flex } from "@chakra-ui/core"

const Navbar = () => {
  const { colors } = customTheme
  return (
    <div>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        bg={colors.green.light}
        p="0 0.75rem"
      >
        <Flex alignItems="center" justifyContent="space-around">
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>About Us</NavbarItem>
          <NavbarItem>Menu</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </Flex>
        <NavbarItem>Takeout (n)</NavbarItem>
      </Flex>
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
    </div>
  )
}

export default Navbar
