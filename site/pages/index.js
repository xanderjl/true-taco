import Layout from "../components/Layout"
import { Box, Heading } from "@chakra-ui/core"
import customTheme from "../styles/theme"
import Menu from "../components/Menu"
import Container from "../components/Container"

const Home = () => {
  const { colors, maxWidth } = customTheme
  return (
    <Layout title="Home">
      <Box
        w="100%"
        h="800px"
        pos="relative"
        bg={colors.orange[100]}
        backgroundImage="url(/images/forming-pupusa.JPG)"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="none"
      >
        <Container pos="relative">
          <Heading
            d="inline-block"
            as="h1"
            p="0.25rem 1.25rem"
            pb={["1.5rem", "0"]}
            pos="absolute"
            bottom={["0", "15%"]}
            right="0"
            bg={colors.red.light}
            color={colors.white}
            fontWeight="400"
            fontSize="6xl"
            textAlign={["center", "left"]}
          >
            authentic comedor latino
          </Heading>
        </Container>
      </Box>
      <Menu p="8rem 1.25rem" m="auto" />
    </Layout>
  )
}

export default Home
