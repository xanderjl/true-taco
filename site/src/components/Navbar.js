import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Flex, Icon, Image } from "@chakra-ui/core"
import NavbarItem from "../components/NavbarItem"
import { Container } from "../components/Layout"
import Hamburger from "hamburger-react"
import { useShoppingCart } from "use-shopping-cart"
import Logo from "../images/logo/2.svg"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      sanityMenu {
        isOpen
      }
    }
  `)
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
              w={["100vw", "max-content"]}
              direction={["column", "row"]}
              alignItems={["flex-start", "center"]}
              justifyContent="space-around"
            >
              <NavbarItem href="/">Home</NavbarItem>
              <NavbarItem href="/catering">Catering</NavbarItem>
            </Flex>
            {data.sanityMenu.isOpen && (
              <NavbarItem href="/cart" display={["none", "flex"]}>
                Takeout ({cartCount})
                <Icon
                  name="brownBag"
                  w="auto"
                  height="1.5rem"
                  ml="0.75rem"
                />{" "}
              </NavbarItem>
            )}
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
            <NavbarItem href="/cart" fontSize="2xl" display={["flex", "none"]}>
              <Icon name="brownBag" w="auto" h="2rem" mr="0.5rem" /> (
              {cartCount})
            </NavbarItem>
            <Hamburger toggle={setIsOpen} toggled={isOpen} color="white" />
          </Box>
        </Flex>
      </Container>
      <Link to="/">
        <Image
          zIndex="1"
          w={["2.5rem", "6rem"]}
          h="auto"
          src={Logo}
          alt="True Taco logo"
          pos="absolute"
          top={["0.325rem", "0.75rem"]}
          left={["0.75rem", "50%"]}
          transform={[0, "translateX(-50%)"]}
        />
      </Link>
    </Box>
  )
}

export default Navbar
