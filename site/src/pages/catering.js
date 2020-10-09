/** @jsx jsx */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import { Box, Flex, Heading } from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import Layout, { Container, Section } from "../components/Layout"
import ContactForm from "../components/ContactForm"
import chileRelleno from "../images/chile-relleno.jpg"
import FrillsTop from "../images/frills/top-white.svg"
import FrillsBottom from "../images/frills/bottom-white.svg"

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
  const frills = css`
    &::before {
      display: block;
      overflow-x: hidden;
      position: relative;
      top: 0;
      width: 100%;
      height: 23px;
      content: "";
      background-repeat: repeat;
      background: url(${FrillsTop});
    }

    &::after {
      display: block;
      overflow-x: hidden;
      position: relative;
      bottom: 0;
      width: 100%;
      height: 22px;
      content: "";
      background: url(${FrillsBottom});
    }
  `

  return (
    <Layout title={title}>
      <Box
        w="100%"
        minH={["calc(100vh - 3.35rem)", "calc(100vh - 4rem)"]}
        bgImage={`url(${chileRelleno})`}
        bgPos="50% 0"
        bgSize="cover"
        backgroundRepeat="no-repeat"
      >
        <Container pt={["3rem", "5rem"]}>
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
                  d="inline-block"
                  as="h1"
                  p="0.25rem 1.25rem"
                  bg="red.light"
                  color="white"
                  fontWeight="400"
                  fontSize="6xl"
                  textAlign={["center", "left"]}
                >
                  {heading}
                </Heading>
              </Box>
              <Box css={frills}>
                <Box
                  maxW="70ch"
                  minH="50vh"
                  p={["3rem 1.25rem", "5rem 3rem"]}
                  bg="white"
                  color="black"
                  fontSize={["xl", "2xl"]}
                >
                  <BlockContent blocks={_rawBody} />
                </Box>
              </Box>
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
