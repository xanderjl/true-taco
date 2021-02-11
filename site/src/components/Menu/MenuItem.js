/** @jsx jsx */
import React, { useState } from "react"
import { css, jsx } from "@emotion/core"
import {
  Button,
  Flex,
  Heading,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { useShoppingCart } from "use-shopping-cart"
import ImageModal from "./ImageModal"

const MenuItem = ({
  heading,
  price,
  children,
  product,
  metadata,
  shopOpen,
}) => {
  const { addItem } = useShoppingCart()
  const [quantity, setQuantity] = useState(1)
  const itemFillings = metadata?.fillings
  const itemOptions = metadata?.options
  const [filling, setFilling] = useState(itemFillings && itemFillings[0]?.title)
  const [options, setOptions] = useState(itemOptions && itemOptions[0])

  const dotLeaders = css`
    &::after {
      float: right;
      width: 0;
      margin-left: 1.25rem;
      white-space: nowrap;
      content: ". . . . . . . . . . . . . . . . . . . ";
    }
  `

  const { isOpen, onOpen, onClose } = useDisclosure()
  const itemMatch =
    itemOptions.filter(item => item.title === options)[0] || options

  return (
    <Flex direction="column" justify="space-between">
      <Flex direction="column">
        <Flex
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
            Õ{itemOptions.length !== 0 ? itemMatch.price : price}Ô
          </Heading>
        </Flex>
        {children}
        {product.image && (
          <>
            <Button
              w="max-content"
              mb="2rem"
              size="sm"
              colorScheme="red"
              borderRadius={0}
              onClick={onOpen}
            >
              Preview
            </Button>
            <ImageModal
              image={product.image}
              isOpen={isOpen}
              onClose={onClose}
            />
          </>
        )}
        {itemFillings.length !== 0 && (
          <>
            <Heading size="lg" color="white">
              Filling
            </Heading>
            <Select
              size="sm"
              variant="flushed"
              mb="1rem"
              fontSize="lg"
              color="white"
              onChange={e => setFilling(e.currentTarget.value)}
            >
              {itemFillings
                .filter(item => item.active)
                .map(({ id, title }) => {
                  return (
                    <Text as="option" key={id} value={title} color="black">
                      {title}
                    </Text>
                  )
                })}
            </Select>
          </>
        )}
        {itemOptions.length !== 0 && (
          <>
            <Heading size="lg" color="white">
              Options
            </Heading>
            <Select
              size="sm"
              variant="flushed"
              mb="1rem"
              fontSize="lg"
              color="white"
              onChange={e => setOptions(e.currentTarget.value)}
            >
              {itemOptions.map((item, i) => {
                return (
                  <Text as="option" key={i} value={item.title} color="black">
                    {item.title} (${item.price})
                  </Text>
                )
              })}
            </Select>
          </>
        )}
        {/* TODO: add extras component */}
      </Flex>
      {shopOpen && (
        <Flex justify={["space-between", "flex-start"]}>
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
            w="max-content"
            ml="1rem"
            colorScheme="green"
            borderRadius={0}
            size="md"
            onClick={e => {
              e.preventDefault()
              addItem(
                {
                  ...product,
                  id: `${product.id}${options ? "-" + itemMatch.title : ""}${
                    filling ? "-" + filling : ""
                  }`,
                  description: `${
                    filling
                      ? `Filling: ${filling}, ${product.description}`
                      : product.description
                  }`,
                  price: itemMatch ? itemMatch.price * 100 : price * 100,
                },
                quantity,
                {
                  metadata: { filling, variant: itemMatch && itemMatch.title },
                }
              )
            }}
          >
            Add to cart
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

export default MenuItem
