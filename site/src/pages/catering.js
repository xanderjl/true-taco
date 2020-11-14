import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import { Box, Flex, Heading } from "@chakra-ui/react"
import Layout, { Container, Section } from "../components/Layout"
import ContactForm from "../components/ContactForm"
import FrillsBottom from "../images/frills/bottom.svg"

const Catering = () => {
  const data = useStaticQuery(graphql`
    {
      sanityCatering {
        title
        heading
        _rawBody
      }
    }
  `)
  const { title, heading, _rawBody } = data.sanityCatering

  return (
    <Layout title={title}>
      <Box
        bg="black"
        _after={{
          display: "block",
          overflowX: "hidden",
          position: "relative",
          bottom: "-22px",
          width: "100%",
          height: "22px",
          content: `""`,
          background: `url(${FrillsBottom})`,
        }}
      >
        <Container minH="40vh" pt={["3rem", "5rem"]}>
          <Section>
            <Flex
              w="100%"
              h="100%"
              flexDir="column"
              align="center"
              justify="center"
            >
              <Box pb="3rem">
                <Heading
                  as="h1"
                  size="4xl"
                  p="0.25rem 1.25rem"
                  color="white"
                  fontWeight="400"
                  textAlign="center"
                >
                  {heading}
                </Heading>
              </Box>
              <Box>
                <Box maxW="70ch" color="white" fontSize={["xl", "2xl"]}>
                  <BlockContent blocks={_rawBody} />
                </Box>
              </Box>
            </Flex>
          </Section>
        </Container>
      </Box>
      <Box bg="orange.50" color="orange.900">
        <Container>
          <Section p="10rem 1.25rem">
            <Box maxW="70ch" m="0 auto">
              <Heading as="h1" size="4xl" mb="0.5rem" fontWeight="400">
                Reach Out
              </Heading>
              <ContactForm buttonColor="red" inputColor="orange.100" />
            </Box>
          </Section>
        </Container>
      </Box>
    </Layout>
  )
}

export default Catering
