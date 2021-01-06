import React, { useState } from "react"
import Layout, { Container, Section } from "../components/Layout"
import {
  Text,
  Button,
  Box,
  Flex,
  Grid,
  Divider,
  Heading,
  Textarea,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"
import { useShoppingCart } from "use-shopping-cart"
import bottomFrills from "../images/frills/bottom-white.svg"

const Cart = () => {
  const [notes, setNotes] = useState()

  const {
    incrementItem,
    decrementItem,
    removeItem,
    cartCount,
    cartDetails,
    clearCart,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart()

  const subtotal = totalPrice / 100
  const hst = subtotal * 0.13
  const total = subtotal + hst

  const cartItems = Object.values(cartDetails)
  cartItems < 1 && clearCart() // Clear cart of HST line if revisiting site

  const handleSubmit = async event => {
    event.preventDefault()

    const response = await fetch("/.netlify/functions/create-session", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: cartDetails,
        metadata: { notes },
        subtotal: totalPrice,
      }),
    })
      .then(res => {
        return res.json()
      })
      .catch(error => console.log(error))

    redirectToCheckout({ sessionId: response.sessionId })
    clearCart()
  }

  return (
    <Layout title="Cart" bg="gray.100">
      <Container>
        <Section
          maxW="960px"
          m={[0, "0 auto", "5rem auto"]}
          mb={{ sm: "5rem" }}
          p={["3rem 1.25rem", "3rem 2.5rem"]}
          bg="white"
          _after={{
            width: "calc(100% + 5rem)",
            height: "22px",
            content: `""`,
            display: "block",
            position: "relative",
            bottom: "calc(-5rem + 10px)",
            left: "calc(-2.5rem)",
            backgroundImage: `url(${bottomFrills})`,
          }}
        >
          {cartCount > 0 ? (
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th color="black" fontFamily="body">
                    Item
                  </Th>
                  <Th color="black" fontFamily="body">
                    Variant
                  </Th>
                  <Th color="black" fontFamily="body">
                    Filling
                  </Th>
                  <Th color="black" fontFamily="body">
                    Quantity
                  </Th>
                  <Th color="black" fontFamily="body">
                    Subtotal
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {cartItems.map((item, i) => {
                  const {
                    name,
                    sku,
                    price_data,
                    formattedValue,
                    quantity,
                  } = item
                  console.log(item)
                  return (
                    <Tr>
                      <Td>{name}</Td>
                      <Td>{price_data?.metadata?.variant}</Td>
                      <Td>{price_data?.metadata?.filling}</Td>
                      <Td>
                        <Flex alignItems="center">
                          <Box p="0 1rem">
                            <Button
                              size="sm"
                              p="0"
                              color="white"
                              bg="red.500"
                              _hover={{ bg: "red.200" }}
                              borderRadius="0"
                              onClick={() => quantity > 1 && decrementItem(sku)}
                            >
                              -
                            </Button>
                          </Box>
                          <Text as="span">{quantity}</Text>
                          <Box p="0 0 0 1rem">
                            <Button
                              size="sm"
                              p="0"
                              color="white"
                              bg="red.500"
                              _hover={{ bg: "red.200" }}
                              borderRadius="0"
                              onClick={() => incrementItem(sku)}
                            >
                              +
                            </Button>
                            <Button
                              size="sm"
                              color="white"
                              bg="red.500"
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
                        </Flex>
                      </Td>
                      <Td>{formattedValue}</Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          ) : (
            <Flex dir="column" align="center" justify="center">
              <Heading as="h1" size="4xl" fontWeight="400">
                Your cart is empty
              </Heading>
            </Flex>
          )}
          {cartCount > 0 && (
            <Box>
              <Heading as="h3" size="md" fontWeight="bold" fontFamily="body">
                Notes:
              </Heading>
              <Heading
                as="h4"
                mb="1.25rem"
                size="sm"
                fontFamily="body"
                color="gray.700"
              >
                Alergies, substitutions, etc.
              </Heading>
              <Textarea
                rows={10}
                borderRadius="2px"
                placeholder="Can I substitute the tortilla for a lettuce wrap?"
                value={notes}
                onChange={e => {
                  setNotes(e.target.value)
                }}
              />
              <Flex
                p="2rem 0 1rem 0"
                direction="column"
                align="flex-end"
                fontSize={["lg", "xl"]}
              >
                <Text>Subtotal: ${subtotal}</Text>
                <Text>HST: ${hst.toFixed(2)}</Text>
                <Text fontWeight={600}>Total: ${total.toFixed(2)}</Text>
              </Flex>
              <Flex justify="flex-end">
                <Button
                  mb="1rem"
                  bg="red.500"
                  color="white"
                  _hover={{ bg: "red.200" }}
                  borderRadius="0"
                  onClick={handleSubmit}
                  onKeyDown={e => e.key === "Enter" && handleSubmit}
                >
                  Proceed to Checkout
                </Button>
              </Flex>
            </Box>
          )}
        </Section>
      </Container>
    </Layout>
  )
}

export default Cart
