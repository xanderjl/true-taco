import React from "react"

import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"

const ProviderWrapper = ({ element }) => {
  const stripePromise = loadStripe(process.env.GATSBY_STRIPE_API_PUBLIC)

  return (
    <CartProvider
      stripe={stripePromise}
      successUrl="stripe.com"
      cancelUrl="/"
      currency="CAD"
      allowedCountries={["CA"]}
      billingAddressCollection={true}
    >
      {element}
    </CartProvider>
  )
}

export default ProviderWrapper
