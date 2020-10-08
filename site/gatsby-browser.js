const React = require("react")
const { loadStripe } = require("@stripe/stripe-js")
const { CartProvider } = require("use-shopping-cart")
require("./src/styles/fonts.css")

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_API_PUBLIC)

module.exports.wrapRootElement = ({ element }) => {
  return (
    <CartProvider
      stripe={stripePromise}
      successUrl={`${process.env.URL || "http://localhost:8000/success"}`}
      cancelUrl={`${process.env.URL || "http://localhost:8000/cart"}`}
      currency="CAD"
      allowedCountries={["CA"]}
      billingAddressCollection={true}
      mode="checkout-session"
    >
      {element}
    </CartProvider>
  )
}
