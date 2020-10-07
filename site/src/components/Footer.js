import React from "react"
import { Link as GLink } from "gatsby"
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Link,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/core"
import { Container, Section } from "./Layout"
import { FaFacebookSquare } from "react-icons/fa"
import { FiInstagram, FiExternalLink } from "react-icons/fi"
import { HiLocationMarker } from "react-icons/hi"

const Footer = () => {
  return (
    <Box bg="orange.100" color="orange.900">
      <Container>
        <Section pb="1rem">
          <Grid
            pb="4rem"
            gridTemplateColumns={["minmax(0, 1fr)", "repeat(3, 1fr)"]}
            gap={["0.75rem", "1rem"]}
          >
            <Flex flexDir="column">
              <Heading as="h2" fontSize="5xl" fontWeight="400" pb="0.5rem">
                True Taco
              </Heading>
              <Text>
                True Taco is an authentic comedor latino. We specialize in
                Mexican and Salvadorian food. Serving London since 2009.
              </Text>
              <Text>
                Located inside The Market at the Western Fair. Open every
                Saturday between 8AM - 3PM.
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Heading as="h3" fontFamily="body" fontSize="lg">
                Site Links
              </Heading>
              <List>
                <Link as={GLink} to="/">
                  <ListItem>Home</ListItem>
                </Link>
                <Link as={GLink} to="/catering">
                  <ListItem>Catering</ListItem>
                </Link>
              </List>
            </Flex>
            <Flex flexDir="column">
              <Heading as="h3" fontFamily="body" fontSize="lg">
                Contact Us
              </Heading>
              <List>
                <Link
                  href="https://www.google.com/maps/place/The+Market+at+Western+Fair+District/@42.9910852,-81.2232538,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x0:0x6671687381277e25!2sTrue+Taco!8m2!3d42.989806!4d-81.2205571!3m4!1s0x882ef277c9e3af8d:0xa26ae32aa0dc2d71!8m2!3d42.9910852!4d-81.2210651"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem d="flex" alignItems="center">
                    <ListIcon icon={HiLocationMarker} />
                    900 King Street, N5W 2X7, London Ontario
                    <Box as={FiExternalLink} ml="0.25rem" />
                  </ListItem>
                </Link>{" "}
                <Link href="tel:226-237-2573">
                  <ListItem>
                    <ListIcon icon="phone" />
                    (226) 237-2573
                  </ListItem>
                </Link>{" "}
                <Link href="mailto:admin@truetaco.ca">
                  <ListItem>
                    <ListIcon icon="email" />
                    admin@truetaco.ca
                  </ListItem>
                </Link>{" "}
                <Link
                  href="https://www.facebook.com/truetaco/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem d="flex" alignItems="center">
                    <ListIcon icon={FaFacebookSquare} />
                    True Taco
                    <Box as={FiExternalLink} ml="0.25rem" />
                  </ListItem>
                </Link>{" "}
                <Link
                  href="https://www.instagram.com/truetaco/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem d="flex" alignItems="center">
                    <ListIcon icon={FiInstagram} />
                    @truetaco
                    <Box as={FiExternalLink} ml="0.25rem" />
                  </ListItem>
                </Link>
              </List>
            </Flex>
          </Grid>
          <Flex justify="center">
            Designed by
            <Link
              d="flex"
              alignItems="center"
              ml="0.25rem"
              href="https://alexlow.dev"
              target="_blank"
              rel="noopener noreferrer"
              color="red.600"
            >
              Alex Low
              <Box ml="0.25rem" as={FiExternalLink} />
            </Link>
          </Flex>
        </Section>
      </Container>
    </Box>
  )
}

export default Footer
