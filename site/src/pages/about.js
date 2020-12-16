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
            backgroundImage="repeating-linear-gradient(157.5deg, rgb(255,255,255) 0px, rgb(255,255,255) 20px,transparent 20px, transparent 22px),repeating-linear-gradient(90deg, rgb(255,255,255) 0px, rgb(255,255,255) 20px,transparent 20px, transparent 22px),linear-gradient(90deg, rgb(217,255,224),rgb(180,255,200),hsl(117,93%,55%),rgb(34,247,34),rgb(0,176,4));"
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
              m="3rem 1.25rem"
              justifySelf="center"
              alignSelf="center"
              bg="white"
              border="1px solid black"
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
