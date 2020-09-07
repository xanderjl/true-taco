import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import customTheme from "../styles/theme"
import Navbar from "../components/Navbar"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
