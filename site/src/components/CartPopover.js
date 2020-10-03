import React, { useRef } from "react"
import {
  Icon,
  Text,
  Button,
  Box,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/core"
import { useShoppingCart } from "use-shopping-cart"

const CartPopover = () => {
  const checkoutRef = useRef(null)
  const {
    incrementItem,
    decrementItem,
    removeItem,
    cartCount,
    cartDetails,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart()

  const cartItems = Object.values(cartDetails)

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await fetch("/.netlify/functions/stripeSession", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
      .then(res => {
        return res.json()
      })
      .catch(error => console.log(error))

    redirectToCheckout({ sessionId: response.sessionId })
  }

  return (
    <Popover usePortal initialFocusRef={checkoutRef}>
      <PopoverTrigger>
        <Button
          color="white"
          bg="transparent"
          p="0"
          _hover={{ bg: "transparent" }}
          fontSize={["lg", "xl"]}
          fontWeight="400"
        >
          Takeout ({cartCount})
          <Icon name="brownBag" w="auto" height="1.5rem" ml="0.75rem" />{" "}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        color="black"
        bg="white"
        maxW={["100vw", "660px"]}
        fontSize={["md", "lg"]}
        borderRadius="0"
        zIndex="1"
      >
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="600">Cart Details</PopoverHeader>
        {cartItems.length > 0 && (
          <PopoverBody>
            {cartItems.map((item, i) => {
              const { name, sku, currency, formattedValue, quantity } = item
              return (
                <Flex
                  key={i}
                  p=".5rem 0"
                  direction={["column", "row"]}
                  justify="space-between"
                >
                  <Flex
                    w={["100%", "50%"]}
                    pb={["3rem", "0"]}
                    justify="space-between"
                  >
                    <Flex align="center">
                      <Text as="span">{name}</Text>
                      <Box p="0 1rem">
                        <Button
                          size="sm"
                          p="0"
                          color="white"
                          bg="red.light"
                          _hover={{ bg: "red.200" }}
                          borderRadius="0"
                          onClick={() => quantity > 1 && decrementItem(sku)}
                        >
                          -
                        </Button>
                      </Box>
                      <Text as="span">{quantity}</Text>
                      <Box p="0 1rem">
                        <Button
                          size="sm"
                          p="0"
                          color="white"
                          bg="red.light"
                          _hover={{ bg: "red.200" }}
                          borderRadius="0"
                          onClick={() => incrementItem(sku)}
                        >
                          +
                        </Button>
                      </Box>
                    </Flex>
                  </Flex>
                  <Flex w={["100%", "50%"]} justify="flex-end" align="center">
                    <Box pr={["1rem", "2rem"]}>
                      <Button
                        size="sm"
                        color="white"
                        bg="red.light"
                        _hover={{ bg: "red.200" }}
                        borderRadius="0"
                        onClick={() => removeItem(sku)}
                      >
                        {cartItems > 1 ? (
                          <span>Remove Items</span>
                        ) : (
                          <span>Remove Item</span>
                        )}
                      </Button>
                    </Box>
                    <Text>{formattedValue}</Text>
                  </Flex>
                  {cartItems.length > 1 && <hr />}
                </Flex>
              )
            })}
          </PopoverBody>
        )}
        <PopoverFooter>
          <Flex p="2rem 0 1rem 0" justify="flex-end" align="center">
            <Text>Cart Total: ${totalPrice / 100}</Text>
          </Flex>
          <Flex justify="flex-end">
            <Button
              ref={checkoutRef}
              mb="1rem"
              bg="red.light"
              color="white"
              _hover={{ bg: "red.200" }}
              borderRadius="0"
              onClick={handleSubmit}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
            >
              Proceed to Checkout
            </Button>
          </Flex>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}

export default CartPopover
