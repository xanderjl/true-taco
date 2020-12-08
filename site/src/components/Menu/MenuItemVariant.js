/** @jsx jsx */
import React, { useState } from "react"
import { css, jsx } from "@emotion/core"
import {
  Button,
  Flex,
  Heading,
  Text,
  Select,
  Image,
  useToast,
} from "@chakra-ui/react"
import { useShoppingCart } from "use-shopping-cart"

const MenuItemVariant = ({ variants }) => {
  const { addItem } = useShoppingCart()
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(variants[0].node)
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
  const product = {
    name: `${variant.metadata.variant} ${variant.product.name}`,
    sku: variant.id,
    price: variant.unit_amount,
    image: variant.product.images[0],
    currency: variant.currency,
    description: variant.product.description,
  }

  return (
    <Flex direction="column" justify="space-between">
      <Flex direction="column">
        <Flex justify="space-between">
          <Image
            src={product.image}
            w="150px"
            h="150px"
            objectFit="cover"
            objectPosition="center"
          />
          <Flex
            direction="column"
            overflow="hidden"
            justifyContent="space-between"
          >
            <Heading
              css={dotLeaders}
              as="h2"
              size="2xl"
              color="white"
              fontWeight="400"
            >
              {product.name}
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
              Õ{product.price / 100}Ô
            </Heading>
            <Text maxW="75%" mb="2rem" fontSize="lg" color="white">
              {product.description}
            </Text>
          </Flex>
        </Flex>
        <Heading size="lg" color="white">
          Options:
        </Heading>
        <Select
          variant="flushed"
          color="white"
          fontSize="lg"
          onChange={e => setVariant(JSON.parse(e.currentTarget.value))}
        >
          {variants.map(({ node }, i) => {
            const { metadata, unit_amount } = node

            return (
              <Text
                as="option"
                key={i}
                value={JSON.stringify(node)}
                color="black"
              >
                {`${metadata.variant} (${unit_amount / 100})`}
              </Text>
            )
          })}
        </Select>
      </Flex>
      <Flex pt="3rem" justify={["space-between", "flex-start"]}>
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

export default MenuItemVariant
