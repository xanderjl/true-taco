import React from "react"
import { graphql } from "gatsby"
import { Image, Box, Grid, Heading } from "@chakra-ui/react"
import BlockContent from "@sanity/block-content-to-react"
import Layout, { Container } from "../components/Layout"

const About = ({ data }) => {
  const { title, heading, _rawBody, image } = data.sanityAbout
  return (
    <Layout title={title}>
      <Box bg="gray.50">
        <Container>
          <Grid
            minH="calc(100vh - 400px)"
            gridTemplateColumns={{
              base: "minmax(0, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            bg="white"
          >
            <Image
              src={image.asset.fluid.src}
              alignSelf="end"
              pos="relative"
              pt="3rem"
            />
            <Box
              flex={1}
              maxW="65ch"
              p="3rem 1.25rem"
              justifySelf="center"
              alignSelf="center"
            >
              <Heading as="h1" size="3xl" mb="1rem">
                {heading}
              </Heading>
              <BlockContent blocks={_rawBody} />
            </Box>
          </Grid>
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
