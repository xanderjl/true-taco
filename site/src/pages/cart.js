/** @jsx jsx */
import React from "react"
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
} from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import { useShoppingCart } from "use-shopping-cart"
import bottomFrills from "../images/frills/bottom-white.svg"

const Cart = () => {
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

  const ziggies = css`
    &::after {
      width: calc(100% + 5rem);
      height: 22px;
      content: "";
      display: block;
      position: relative;
      bottom: calc(-5rem + 13px);
      left: calc(-2.5rem);
      background-image: url(${bottomFrills});
    }
  `

  const handleSubmit = async event => {
    event.preventDefault()

    const response = await fetch("/.netlify/functions/create-session", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
      .then(res => {
        return res.json()
      })
      .catch(error => console.log(error))

    console.log(JSON.stringify(cartDetails, null, 2))
    redirectToCheckout({ sessionId: response.sessionId })
  }

  return (
    <Layout title="Cart" bg="gray.50">
      <Container>
        <Section
          css={ziggies}
          maxW="960px"
          m={[0, "0 auto", "5rem auto"]}
          mb={{ sm: "5rem" }}
          p={["3rem 1.25rem", "3rem 2.5rem"]}
          bg="white"
        >
          {cartCount > 0 ? (
            cartItems.map((item, i) => {
              const { name, sku, formattedValue, quantity } = item
              return (
                <Box key={i} color="black">
                  <Grid
                    templateColumns={["minmax(0, 1fr)", "repeat(2, 1fr)"]}
                    gap="2.5rem"
                    pb="2rem"
                  >
                    <Flex
                      align="center"
                      justify="space-between"
                      fontSize={["lg", "xl"]}
                    >
                      <Text as="span">{name}</Text>
                      <Flex>
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
                        </Box>
                      </Flex>
                    </Flex>
                    <Flex
                      justify="flex-end"
                      align="center"
                      fontSize={["lg", "xl"]}
                    >
                      <Box pr={["1rem", "2rem"]}>
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
                      <Text>{formattedValue}</Text>
                    </Flex>
                  </Grid>
                  <Divider mb="2rem" borderColor="gray.200" />
                  <Heading
                    as="h3"
                    size="md"
                    fontWeight="bold"
                    fontFamily="body"
                  >
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
                  />
                </Box>
              )
            })
          ) : (
            <Flex dir="column" align="center" justify="center">
              <Heading fontWeight="400" fontSize="6xl">
                Your cart is empty
              </Heading>
            </Flex>
          )}
          {cartCount > 0 && (
            <Box>
              <Flex
                p="2rem 0 1rem 0"
                justify="flex-end"
                align="center"
                fontSize={["lg", "xl"]}
              >
                <Text>Cart Total: ${totalPrice / 100}</Text>
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
