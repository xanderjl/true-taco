/** @jsx jsx */
import React from "react"
import Layout, { Container, Section } from "../components/Layout"
import { Text, Button, Icon, Box, Flex, Grid, Divider } from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import { useShoppingCart } from "use-shopping-cart"
import Zigs from "../images/frills/clip-zigs.svg"

const Cart = () => {
  const {
    incrementItem,
    decrementItem,
    removeItem,
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

  const ziggies = css`
    overflow: hidden;

    &::after {
      width: calc(100% + 6rem);
      height: 22px;
      content: "";
      display: block;
      position: relative;
      bottom: -3rem;
      left: -2.5rem;
      background-image: url(${Zigs});
    }
  `

  return (
    <Layout title="Cart" bg="red.50">
      <Container>
        <Section
          css={ziggies}
          maxW="960px"
          m="0 auto"
          p={["3rem 1.25rem", "3rem 2.5rem"]}
          bg="white"
        >
          {cartItems.map((item, i) => {
            const { name, sku, currency, formattedValue, quantity } = item
            return (
              <Box key={i}>
                <Grid
                  templateColumns={["minmax(0, 1fr)", "repeat(2, 1fr)"]}
                  gap="2.5rem"
                  pb="2rem"
                >
                  <Flex align="center" justify="space-between">
                    <Text as="span">{name}</Text>
                    <Flex>
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
                  <Flex justify="flex-end" align="center">
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
                </Grid>
                <Divider mb="2rem" />
              </Box>
            )
          })}
          <Flex p="2rem 0 1rem 0" justify="flex-end" align="center">
            <Text>Cart Total: ${totalPrice / 100}</Text>
          </Flex>
          <Flex justify="flex-end">
            <Button
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
        </Section>
      </Container>
    </Layout>
  )
}

export default Cart
