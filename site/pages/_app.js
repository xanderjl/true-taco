import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import customTheme from "../styles/theme"
import "../styles/fonts.css"
import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"

const stripePromise = loadStripe(process.env.STRIPE_API_PUBLIC)

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CartProvider
        stripe={stripePromise}
        successUrl="/success"
        cancelUrl="/"
        currency="CAD"
        allowedCountries={["CA"]}
        billingAddressCollection={true}
      >
        <CSSReset />
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  )
}

export default MyApp
