import Link from "next/link"
import { Box, Flex, Icon, Image } from "@chakra-ui/core"
import customTheme from "../styles/theme"
import NavbarItem from "../components/NavbarItem"
import Container from "../components/Container"

const Navbar = () => {
  const { colors } = customTheme
  return (
    <Box bg={colors.green.light} p="0 0.75rem">
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
