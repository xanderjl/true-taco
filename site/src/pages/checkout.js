import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, CardElement } from "@stripe/react-stripe-js"
import { cartDetails } from "use-shopping-cart"
import { Stack, Button } from "@chakra-ui/react"
import Layout, { Container, Section } from "../components/Layout"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_API_PUBLIC)

const Checkout = () => {
  const handleSubmit = async event => {
    event.preventDefault()

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart: cartDetails }),
    })
      .then(res => {
        return res.json()
      })
      .catch(error => console.log(error))
  }

  return (
    <Layout>
      <Elements stripe={stripePromise}>
        <Container>
          <Section>
            <Stack direction="column">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                    },
                  },
                }}
              />
            </Stack>
            <Button onClick={handleSubmit}>CLICK ME</Button>
          </Section>
        </Container>
      </Elements>
    </Layout>
  )
}

export default Checkout
