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
  useToast,
} from "@chakra-ui/react"
import { useShoppingCart } from "use-shopping-cart"
import ImageModal from "./ImageModal"

const MenuItem = ({ heading, price, children, product, metadata }) => {
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
  const itemFillings = metadata?.fillings && metadata.fillings.split(", ")

  const { isOpen, onOpen, onClose } = useDisclosure()

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
            Õ{price}Ô
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
        {metadata?.options && (
          <Select
            size="sm"
            variant="flushed"
            mb="1rem"
            fontSize="lg"
            color="white"
          >
            {metadata?.options.split(", ").map((item, i) => (
              <Text as="option" key={i} value={`Option ${i}`} color="black">
                {item}
              </Text>
            ))}
          </Select>
        )}
        {itemFillings && (
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
            >
              {itemFillings.map((item, i) => (
                <Text as="option" key={i} value={`Filling ${i}`} color="black">
                  {item}
                </Text>
              ))}
            </Select>
          </>
        )}
      </Flex>
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
