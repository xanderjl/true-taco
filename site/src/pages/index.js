import React from "react"
import { Box, Heading } from "@chakra-ui/core"
import Layout, { Container } from "../components/Layout"
import Menu from "../components/Menu"
import formingPupusas from "../images/forming-pupusa.jpg"

const Home = () => {
  const inventory = async () => {
    await fetch("https://api.stripe.com/v1/prices", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authentication: `Bearer ${process.env.GATSBY_STRIPE_API_SECRET}`,
      },
    })
      .then(response => {
        return response.json()
      })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  // inventory()

  return (
    <Layout title="Home">
      <Box
        w="100%"
        h={["calc(100vh - 3.25rem)", "calc(100vh - 4rem)"]}
        pos="relative"
        bg="orange.100"
        backgroundImage={`url(${formingPupusas})`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="none"
      >
        <Container pos="relative">
          <Heading
            d="inline-block"
            as="h1"
            p="0.25rem 1.25rem"
            pb={["2.5rem", "0.25rem"]}
            pt={["1.25rem", "0.25rem"]}
            pos="absolute"
            bottom={["0", "15%"]}
            right="0"
            bg="red.light"
            color="white"
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
