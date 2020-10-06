import React, { useState } from "react"
import { Link } from "gatsby"
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/core"
import NavbarItem from "../components/NavbarItem"
import { Container } from "../components/Layout"
import Hamburger from "hamburger-react"
import { useShoppingCart } from "use-shopping-cart"
import Logo from "../images/logo/2.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { cartCount } = useShoppingCart()

  return (
    <Box
      h={["3.25rem", "4rem"]}
      p="0 0.75rem"
      position="fixed"
      left="0"
      right="0"
      zIndex="1"
      bg="green.light"
    >
      <Container>
        <Flex alignItems={["flex-start", "center"]}>
          <Box
            w="100vw"
            position={["fixed", "static"]}
            top={["3.25rem", "4rem"]}
            left="0"
            d={[!isOpen && "none", "flex"]}
            justifyContent="space-between"
            alignItems="center"
            bg="green.light"
          >
            <Flex
              direction={["column", "row"]}
              alignItems={["flex-start", "center"]}
              justifyContent="space-around"
            >
              <NavbarItem href="/">Home</NavbarItem>
              <NavbarItem href="/catering">Catering</NavbarItem>
            </Flex>
            <NavbarItem href="/cart">
              Takeout ({cartCount})
              <Icon
                name="brownBag"
                w="auto"
                height="1.5rem"
                ml="0.75rem"
              />{" "}
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
            <Hamburger toggle={setIsOpen} toggled={isOpen} color="white" />
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
