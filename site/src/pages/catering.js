import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import {
  Box,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react"
import Layout, { Container, Section } from "../components/Layout"
import ContactForm from "../components/ContactForm"
import FrillsBottom from "../images/frills/bottom.svg"
import cateringMenu from "../assets/catering-menu.pdf"
import { AiOutlineFilePdf } from "react-icons/ai"

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
          <Section color="white">
            <Flex
              flexDir="column"
              justify="center"
              fontSize={["xl", "2xl"]}
              maxW="70ch"
              mx="auto"
            >
              <Heading
                as="h1"
                size="4xl"
                p="0.25rem 1.25rem"
                pb="3rem"
                fontWeight="400"
                textAlign="center"
              >
                {heading}
              </Heading>
              <Box pb={8}>
                <BlockContent blocks={_rawBody} />
              </Box>
              <List>
                <Link href={cateringMenu}>
                  <ListItem>
                    <ListIcon as={AiOutlineFilePdf} color="whtie" />
                    View our catering menu here
                  </ListItem>
                </Link>
              </List>
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
