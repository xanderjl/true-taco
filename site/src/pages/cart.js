import React, { useEffect, useState } from "react"
import Layout, { Container, Section } from "../components/Layout"
import {
  Text,
  Button,
  Box,
  Flex,
  Heading,
  Textarea,
  Stack,
  Select,
} from "@chakra-ui/react"
import { useShoppingCart } from "use-shopping-cart"
import bottomFrills from "../images/frills/bottom-white.svg"
import CartAccordion from "../components/Cart/CartAccordion"
import client from "../../sanityClient"
import CartGratuity from "../components/Cart/CartGratuity"

const Cart = ({ data }) => {
  const [notes, setNotes] = useState()
  const [times, setTimes] = useState([])
  const [selectedTime, setSelectedTime] = useState("8:00")

  useEffect(() => {
    client.fetch(`*[_type == "cart"]{times}`).then(query => {
      setTimes(query[0].times)
    })
  }, [])

  const {
    setItemQuantity,
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

  const handleSubmit = async event => {
    event.preventDefault()

    const response = await fetch("/.netlify/functions/create-session", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: cartDetails,
        metadata: { notes, selectedTime },
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
          m={[0, "5rem auto", "5rem auto"]}
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
            cartItems.map((item, i) => {
              const {
                name,
                id,
                description,
                price_data,
                formattedValue,
                quantity,
              } = item
              const options = []
              for (let quantity = 1; quantity <= 20; ++quantity)
                options.push(<option value={quantity}>{quantity}</option>)

              return (
                <CartAccordion key={i} title={`${name} (${quantity})`}>
                  <Stack direction="column" spacing="1rem">
                    <Text color="gray.500">
                      {description.slice(0, 120) +
                        (description.length > 120 ? "..." : "")}
                    </Text>
                    {price_data?.metadata?.variant && (
                      <Text>
                        Variant:{" "}
                        <Text as="span" color="gray.500">
                          {price_data?.metadata?.variant}
                        </Text>
                      </Text>
                    )}
                    {price_data?.metadata?.filling && (
                      <Text>
                        Filling:{" "}
                        <Text as="span" color="gray.500">
                          {price_data?.metadata?.filling}
                        </Text>
                      </Text>
                    )}
                    <Flex justifyContent="space-between" alignItems="center">
                      <Flex alignItems="center">
                        <Text paddingRight="1rem">Quantity:</Text>
                        <Select
                          size="sm"
                          maxW="max-content"
                          defaultValue={quantity}
                          onChange={e => setItemQuantity(id, e.target.value)}
                        >
                          {options}
                        </Select>
                      </Flex>
                      <Text marginLeft="1rem">{formattedValue}</Text>
                    </Flex>
                    <Flex justify="flex-end">
                      <Button
                        size="sm"
                        maxW="max-content"
                        color="white"
                        bg="red.500"
                        _hover={{ bg: "red.200" }}
                        borderRadius="0"
                        onClick={() => removeItem(id)}
                      >
                        <Text as="span">
                          {cartItems > 1 ? "Remove Items" : "Remove Item"}
                        </Text>
                      </Button>
                    </Flex>
                  </Stack>
                </CartAccordion>
              )
            })
          ) : (
            <Flex dir="column" align="center" justify="center">
              <Heading as="h1" size="4xl" fontWeight="400">
                Your cart is empty
              </Heading>
            </Flex>
          )}
          {cartCount > 0 && (
            <Box marginTop="1rem">
              <Heading
                as="h3"
                size="md"
                mb="0.5rem"
                fontWeight="bold"
                fontFamily="body"
              >
                Pickup Time:
              </Heading>
              <Select
                size="sm"
                width="max-content"
                mb="1.25rem"
                onChange={e => setSelectedTime(e.target.value)}
              >
                {times.map(({ time, count }, i) => (
                  <option
                    key={i}
                    value={time}
                    disabled={count === 0 ? true : false}
                  >
                    {time}
                  </option>
                ))}
              </Select>
              <CartGratuity />
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
                Allergies, substitutions, etc.
              </Heading>
              <Textarea
                rows={10}
                borderRadius="2px"
                placeholder={data.sanityCart.notesPlaceholder}
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
                  colorScheme="green"
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

export const data = graphql`
  {
    sanityCart {
      notesPlaceholder
    }
  }
`

export default Cart
