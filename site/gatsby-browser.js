const React = require("react")
const { loadStripe } = require("@stripe/stripe-js")
const { CartProvider } = require("use-shopping-cart")
require("./src/styles/fonts.css")

module.exports.wrapRootElement = ({ element }) => {
  const stripePromise = loadStripe(process.env.GATSBY_STRIPE_API_PUBLIC)

  return (
    <CartProvider
      stripe={stripePromise}
      successUrl="/"
      cancelUrl="/"
      currency="CAD"
      allowedCountries={["CA"]}
      billingAddressCollection={true}
    >
      {element}
    </CartProvider>
  )
}
