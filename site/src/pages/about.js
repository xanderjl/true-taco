import React from "react"
import { graphql } from "gatsby"
import { Image, Box, Flex, Text, Heading } from "@chakra-ui/react"
import BlockContent from "@sanity/block-content-to-react"
import Layout, { Container, Section } from "../components/Layout"

const About = ({ data }) => {
  const { title, _rawBody, image } = data.sanityAbout
  return (
    <Layout>
      <Container>
        <Section>
          <Heading as="h1">{title}</Heading>
          <Text>
            <BlockContent blocks={_rawBody} />
          </Text>
          <Image src={image.asset.fluid.src} />
        </Section>
      </Container>
    </Layout>
  )
}

export const data = graphql`
  {
    sanityAbout {
      title
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
