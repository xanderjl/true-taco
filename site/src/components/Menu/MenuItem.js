/** @jsx jsx */
import React, { useState } from "react"
import { css, jsx } from "@emotion/core"
import { Button, Flex, Heading, Text, useToast } from "@chakra-ui/react"
import { useShoppingCart } from "use-shopping-cart"

const MenuItem = ({ heading, price, children, product }) => {
  const { addItem } = useShoppingCart()
  const [quantity, setQuantity] = useState(1)
  const toast = useToast()

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
          overflow="hidden"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Heading
            css={dotLeaders}
            as="h2"
            size="2xl"
            color="white"
            fontWeight="400"
          >
            {heading}
          </Heading>
          <Heading
            as="h2"
            size="xl"
            d="inline-block"
            pl="1.5rem"
            bg="black"
            color="white"
            fontFamily="banner"
            fontWeight="400"
          >
            Õ{price}Ô
          </Heading>
        </Flex>
        {children}
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
          colorScheme="red"
          w="max-content"
          ml="1rem"
          borderRadius={0}
          size="md"
          color="black"
          onClick={e => {
            e.preventDefault()
            addItem(product, quantity)
            toast({
              title: "Item added to cart.",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          }}
        >
          Add to cart
        </Button>
      </Flex>
    </Flex>
  )
}

export default MenuItem
