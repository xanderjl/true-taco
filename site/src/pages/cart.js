import React from "react"
import Layout, { Container, Section } from "../components/Layout"
import { Text, Button, Box, Flex, Grid } from "@chakra-ui/core"
import { useShoppingCart } from "use-shopping-cart"

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
  return (
    <Layout title="Cart" bg="red.50">
      <Container>
        <Section>
          <Grid
            templateColumns={["minmax(0, 1fr)", "repeat(2, 1fr)"]}
            gap="1rem"
          >
            {cartItems.map((item, i) => {
              const { name, sku, currency, formattedValue, quantity } = item
              return (
                <>
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
                </>
              )
            })}
          </Grid>
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
    //    <Layout>
    //    <Container>
    //      <Section>
    //        {cartItems.map((item, i) => {
    //          const { name, sku, currency, formattedValue, quantity } = item
    //          return (
    //            <Flex
    //              key={i}
    //              p=".5rem 0"
    //              direction={["column", "row"]}
    //              justify="space-between"
    //            >
    //              <Flex
    //                w={["100%", "50%"]}
    //                pb={["3rem", "0"]}
    //                justify="space-between"
    //              >
    //                <Flex align="center">
    //                  <Text as="span">{name}</Text>
    //                  <Box p="0 1rem">
    //                    <Button
    //                      size="sm"
    //                      p="0"
    //                      color="white"
    //                      bg="red.light"
    //                      _hover={{ bg: "red.200" }}
    //                      borderRadius="0"
    //                      onClick={() => quantity > 1 && decrementItem(sku)}
    //                    >
    //                      -
    //                    </Button>
    //                  </Box>
    //                  <Text as="span">{quantity}</Text>
    //                  <Box p="0 1rem">
    //                    <Button
    //                      size="sm"
    //                      p="0"
    //                      color="white"
    //                      bg="red.light"
    //                      _hover={{ bg: "red.200" }}
    //                      borderRadius="0"
    //                      onClick={() => incrementItem(sku)}
    //                    >
    //                      +
    //                    </Button>
    //                  </Box>
    //                </Flex>
    //              </Flex>
    //              <Flex w={["100%", "50%"]} justify="flex-end" align="center">
    //                <Box pr={["1rem", "2rem"]}>
    //                  <Button
    //                    size="sm"
    //                    color="white"
    //                    bg="red.light"
    //                    _hover={{ bg: "red.200" }}
    //                    borderRadius="0"
    //                    onClick={() => removeItem(sku)}
    //                  >
    //                    {cartItems > 1 ? (
    //                      <span>Remove Items</span>
    //                    ) : (
    //                      <span>Remove Item</span>
    //                    )}
    //                  </Button>
    //                </Box>
    //                <Text>{formattedValue}</Text>
    //              </Flex>
    //            </Flex>
    //          )
    //        })}
    //        <Flex p="2rem 0 1rem 0" justify="flex-end" align="center">
    //          <Text>Cart Total: ${totalPrice / 100}</Text>
    //        </Flex>
    //        <Flex justify="flex-end">
    //          <Button
    //            mb="1rem"
    //            bg="red.light"
    //            color="white"
    //            _hover={{ bg: "red.200" }}
    //            borderRadius="0"
    //            onClick={handleSubmit}
    //            onKeyDown={e => e.key === "Enter" && handleSubmit()}
    //          >
    //            Proceed to Checkout
    //          </Button>
    //        </Flex>
    //      </Section>
    //    </Container>
    //  </Layout>
  )
}

export default Cart
