/** @jsx jsx */
import React, { useState } from "react"
import { css, jsx } from "@emotion/core"
import { Button, Flex, Heading, Text } from "@chakra-ui/core"
import { useShoppingCart } from "use-shopping-cart"

const MenuItem = ({ heading, price, children, product }) => {
  const { addItem } = useShoppingCart()
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
    <Flex direction="column" justify="space-between">
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
            color="white"
            fontWeight="400"
            fontSize="5xl"
          >
            {heading}
          </Heading>
          <Heading
            d="inline-block"
            as="h2"
            pl="1.5rem"
            color="white"
            bg="black"
            fontFamily="banner"
            fontWeight="400"
            fontSize="4xl"
          >
            Õ{price}Ô
          </Heading>
        </Flex>
        <Text maxW="75%" fontSize="lg" color="white">
          {children}
        </Text>
      </Flex>
      <Flex pt="3rem" justify={["space-between", "flex-end"]}>
        <Flex>
          <Button
            variant="ghost"
            p="0.25rem"
            color="white"
            _hover={{ bg: "transparent" }}
            fontSize="2xl"
            onClick={() => {
              quantity > 1 && setQuantity(quantity - 1)
            }}
          >
            -
          </Button>
          <Text m="0 0.25rem 0 0.25rem" color="white" fontSize="2xl">
            {quantity}
          </Text>
          <Button
            variant="ghost"
            p="0.25rem"
            color="white"
            _hover={{ bg: "transparent" }}
            fontSize="2xl"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </Flex>
        <Button
          variantColor="red"
          w="max-content"
          ml="1rem"
          borderRadius={0}
          fontSize="lg"
          color="black"
          onClick={e => {
            e.preventDefault()
            addItem(product, quantity)
          }}
        >
          Add to cart
        </Button>
      </Flex>
    </Flex>
  )
}

export default MenuItem
