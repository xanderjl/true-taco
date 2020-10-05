import React from "react"
import { Box, Flex, Text, Heading } from "@chakra-ui/core"
import Layout, { Container, Section } from "../components/Layout"
import ContactForm from "../components/ContactForm"
import chileRelleno from "../images/chile-relleno.jpg"

const Catering = () => {
  return (
    <Layout title="Catering">
      <Box
        w="100%"
        h={["calc(100vh - 3.35rem)", "calc(100vh - 4rem)"]}
        bgImage={`url(${chileRelleno})`}
      >
        <Container>
          <Section>
            <Flex
              w="100%"
              h="100%"
              flexDir="column"
              align="center"
              justify="center"
            >
              <Heading
                d="inline-block"
                as="h1"
                p="0.25rem 1.25rem"
                bg="red.light"
                color="white"
                fontWeight="400"
                fontSize="6xl"
                textAlign={["center", "left"]}
              >
                Catering
              </Heading>
              <Text maxW="70ch" color="white" fontSize="2xl">
                Planning an event? We cater Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Neque illum dicta maxime repellat
                quam. Quam id, fugiat a aliquid odio distinctio blanditiis quis
                cum similique ea officia. Maxime numquam esse perferendis quo
                vero ullam ea ab, quia ex nulla dicta et? Reiciendis
                consequuntur debitis rem, ullam, corporis quia distinctio cum
                eum saepe repellat ducimus sed. Aliquam maiores beatae quos eos!
              </Text>
            </Flex>
          </Section>
        </Container>
      </Box>
      <Box bg="orange.50" color="red.900">
        <Container>
          <Section>
            <Box maxW="70ch" m="0 auto">
              <Heading as="h1" fontSize="6xl" fontWeight="400">
                Reach Out
              </Heading>
              <ContactForm
                color="orange.900"
                buttonColor="red"
                inputColor="orange.100"
              />
            </Box>
          </Section>
        </Container>
      </Box>
    </Layout>
  )
}

export default Catering
