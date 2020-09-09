import React from "react"
import Layout from "../components/Layout"
import { Heading, Text } from "@chakra-ui/core"
import customTheme from "../styles/theme"

const Home = () => {
  return (
    <Layout>
      <main className="">
        <Heading
          as="h1"
          color={customTheme.colors.red.dark}
          fontWeight="400"
          fontSize="6xl"
          m="1rem"
        >
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Heading>
      </main>
    </Layout>
  )
}

export default Home
