import React from "react"
import { graphql } from "gatsby"
import { Image, Box, Flex, Heading } from "@chakra-ui/react"
import BlockContent from "@sanity/block-content-to-react"
import Layout, { Container, Section } from "../components/Layout"

const About = ({ data }) => {
  const { title, heading, _rawBody, image } = data.sanityAbout
  return (
    <Layout title={title}>
      <Box bg="gray.50">
        <Container bg="white">
          <Section>
            <Flex justifyContent="center">
              <Image
                src={image.asset.fluid.src}
                boxSize="300px"
                borderRadius="full"
              />
              <Box flex={1} maxW="70ch">
                <Heading as="h1" size="3xl" mb="1rem">
                  {heading}
                </Heading>
                <BlockContent blocks={_rawBody} />
              </Box>
            </Flex>
          </Section>
        </Container>
      </Box>
    </Layout>
  )
}

export const data = graphql`
  {
    sanityAbout {
      title
      heading
      _rawBody
      image {
        asset {
          fluid {
            src
          }
        }
      }
    }
  }
`

export default About
