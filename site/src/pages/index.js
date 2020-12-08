import React from "react"
import { Box, Heading } from "@chakra-ui/react"
import Layout, { Container } from "../components/Layout"
import Menu from "../components/Menu"
import formingPupusas from "../images/forming-pupusa.jpg"

const Home = () => {
  return (
    <Layout title="Home">
      <Box
        w="100%"
        h={{ base: "calc(100vh - 3.25rem)", md: "calc(100vh - 4rem)" }}
        pos="relative"
        bg="orange.100"
        backgroundImage={`url(${formingPupusas})`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="none"
      >
        <Container pos="relative">
          <Heading
            as="h1"
            size="4xl"
            d="inline-block"
            pos="absolute"
            bottom={{ base: 0, md: "15%" }}
            right={0}
            p="0.25rem 1.25rem"
            pb={{ base: "2.5rem", md: "0.5rem" }}
            pt={{ base: "1.25rem", md: "0.5rem" }}
            bg="red.500"
            color="white"
            fontWeight="400"
            textAlign={{ base: "center", md: "left" }}
          >
            authentic comedor latino
          </Heading>
        </Container>
      </Box>
      <Menu maxW="85ch" p="8rem 1.25rem" m="auto" />
    </Layout>
  )
}

export default Home
