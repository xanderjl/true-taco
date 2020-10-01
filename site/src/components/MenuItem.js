/** @jsx jsx */
import React, { useState } from "react"
import { css, jsx } from "@emotion/core"
import { Button, Flex, Heading, Text } from "@chakra-ui/core"
import customTheme from "../gatsby-plugin-chakra-ui/theme"
import { useShoppingCart } from "use-shopping-cart"

const MenuItem = ({ heading, price, children, product }) => {
  const { colors, fonts } = customTheme
  const { addItem, cartDetails, cartCount } = useShoppingCart()
  const [quantity, setQuantity] = useState(1)

  const dotLeaders = css`
    &::after {
      float: right;
      width: 0;
      margin-left: 1.25rem;
      white-space: nowrap;
      content: ". . . . . . . . . . . . . . . . . . . ";
    }
  `

  return (
    <Flex direction="column">
      <Flex
        maxW="40em"
        overflowX="hidden"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          css={dotLeaders}
          as="h2"
          color={colors.white}
          fontWeight="400"
          fontSize="5xl"
        >
          {heading}
        </Heading>
        <Heading
          d="inline-block"
          as="h2"
          pl="1.5rem"
          color={colors.white}
          bg={colors.black}
          fontFamily={fonts.banner}
          fontWeight="400"
          fontSize="4xl"
        >
          Õ{price}Ô
        </Heading>
      </Flex>
      <Text maxW="75%" fontSize="lg" color={colors.white}>
        {children}
      </Text>
      <Flex pt="3rem" justify="flex-end">
        <Flex>
          <Button
            p="0.25rem"
            bg="transparent"
            color="white"
            _hover={{ bg: "transparent" }}
            fontSize="3xl"
            onClick={() => {
              quantity > 1 && setQuantity(quantity - 1)
            }}
          >
            -
          </Button>
          <Text m="0 0.25rem 0 0.25rem" color="white" fontSize="3xl">
            {quantity}
          </Text>
          <Button
            p="0.25rem"
            bg="transparent"
            color="white"
            _hover={{ bg: "transparent" }}
            fontSize="3xl"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </Flex>
        <Button
          w="max-content"
          ml="1rem"
          borderRadius={0}
          fontSize="lg"
          bg="red.light"
          _hover={{ bg: "red.300" }}
          color="black"
          onClick={e => {
            e.preventDefault()
            addItem(product, quantity)
            console.log(product, quantity, cartDetails, cartCount)
          }}
        >
          Add to cart
        </Button>
      </Flex>
    </Flex>
  )
}

export default MenuItem
