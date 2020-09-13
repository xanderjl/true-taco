import React from "react"
import Layout from "../components/Layout"
import { Box, Heading, Flex, Grid, Text } from "@chakra-ui/core"
import customTheme from "../styles/theme"

const Home = () => {
  const { colors, fonts } = customTheme
  return (
    <Layout>
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
        <Heading
          d="inline-block"
          as="h1"
          p="0.25rem 1.25rem"
          pos="absolute"
          bottom="15%"
          right="12%"
          bg={colors.red.light}
          color={colors.white}
          fontWeight="400"
          fontSize="6xl"
        >
          authentic comedor latino
        </Heading>
      </Box>
      <Box p="3rem 1.25rem" bg={colors.black}>
        <Heading
          mb="3rem"
          as="h1"
          color={colors.white}
          fontWeight="400"
          fontSize="6xl"
          textAlign="center"
          textDecor="underline"
        >
          Saturday Pickup
        </Heading>
        <Grid gridTemplateColumns="repeat(2, 1fr)">
          <Flex direction="column">
            <Flex justifyContent="space-around">
              <Heading
                as="h2"
                color={colors.white}
                fontWeight="400"
                fontSize="5xl"
              >
                Quesadillas
              </Heading>
              <Heading
                as="h2"
                color={colors.white}
                fontFamily={fonts.banner}
                fontWeight="400"
                fontSize="5xl"
              >
                Õ3.5-7Ô
              </Heading>
            </Flex>
            <Text color={colors.white}>
              Mixed cheeses, tomatoes, green onions. Choose your filling. Choose
              your shell. Served with sour cream and sour cream.
            </Text>
          </Flex>
        </Grid>
      </Box>
    </Layout>
  )
}

export default Home
