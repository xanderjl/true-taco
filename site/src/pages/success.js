import React from "react"
import Layout, { Section, Container } from "../components/Layout"
import { Flex, Heading, Text } from "@chakra-ui/core"

const Success = () => {
  return (
    <Layout title="Success">
      <Container>
        <Section pt={["3rem", "5rem"]}>
          <Flex
            maxW="70ch"
            m="0 auto"
            direction="column"
            align="center"
            justify="center"
          >
            <Heading fontWeight="400" fontSize="6xl">
              Thank you
            </Heading>
            <Text textAlign="center" fontSize="2xl">
              An email copy of your receipt should have been sent to your inbox
            </Text>
          </Flex>
        </Section>
      </Container>
    </Layout>
  )
}

export default Success
