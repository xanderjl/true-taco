import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import { Box, Heading, Flex } from "@chakra-ui/react"
import { Container } from "../Layout"
import OrderButton from "./OrderButton"
import FrillsTop from "../../images/frills/top.svg"
import FrillsBottom from "../../images/frills/bottom.svg"
import SubMenu from "./subMenu"

const Menu = props => {
  const data = useStaticQuery(graphql`
    {
      sanityMenu {
        isOpen
        heading
        _rawBody
      }
      allStripePrice(filter: { active: { eq: true } }) {
        group(field: product___id) {
          edges {
            node {
              product {
                id
                images
                name
                type
                active
                description
                metadata {
                  menu
                  fillings
                }
              }
              unit_amount
              id
              currency
              metadata {
                variant
              }
            }
          }
        }
      }
    }
  `)

  const products = data.allStripePrice.group
  const { isOpen, heading, _rawBody } = data.sanityMenu

  const lunchMenu = products.filter(product =>
    product.edges.every(({ node }) => node.product.metadata.menu === "lunch")
  )

  const breakfastMenu = products.filter(product =>
    product.edges.every(
      ({ node }) => node.product.metadata.menu === "breakfast"
    )
  )

  const toGoMenu = products.filter(product =>
    product.edges.every(({ node }) => node.product.metadata.menu === "to-go")
  )

  const extrasMenu = products.filter(product =>
    product.edges.every(({ node }) => node.product.metadata.menu === "extras")
  )

  return (
    <Box
      position="relative"
      bg="black"
      _before={{
        overflowX: "hidden",
        position: "absolute",
        top: "-22px",
        width: "100%",
        height: "25px",
        content: `""`,
        backgroundRepeat: "repeat",
        background: `url(${FrillsTop})`,
      }}
      _after={{
        overflowX: "hidden",
        position: "absolute",
        bottom: "-22px",
        width: "100%",
        height: "22px",
        content: `""`,
        background: `url(${FrillsBottom})`,
      }}
    >
      <Container {...props}>
        <Heading
          as="h1"
          size="4xl"
          mb="5rem"
          color="white"
          fontWeight="400"
          textAlign="center"
          textDecor="underline"
        >
          {heading}
        </Heading>
        {isOpen ? (
          <Box>
            <Heading
              as="h2"
              size="3xl"
              mb="3rem"
              color="white"
              fontWeight="400"
              textDecor="underline"
            >
              Breakfast
            </Heading>
            <SubMenu data={breakfastMenu} />
            <Heading
              as="h2"
              size="3xl"
              mb="3rem"
              color="white"
              fontWeight="400"
              textDecor="underline"
            >
              Lunch
            </Heading>
            <SubMenu data={lunchMenu} />
            <Heading
              as="h2"
              size="3xl"
              mb="3rem"
              color="white"
              fontWeight="400"
              textDecor="underline"
            >
              To Go
            </Heading>
            <SubMenu data={toGoMenu} />
            <Heading
              as="h2"
              size="3xl"
              mb="3rem"
              color="white"
              fontWeight="400"
              textDecor="underline"
            >
              Extras
            </Heading>
            <SubMenu data={extrasMenu} />
            <OrderButton w="6rem" h="auto" />
          </Box>
        ) : (
          <Flex
            dir="column"
            maxW="70ch"
            m="0 auto"
            align="center"
            justify="center"
            color="white"
            fontSize={["xl", "2xl"]}
          >
            <BlockContent blocks={_rawBody} />
          </Flex>
        )}
      </Container>
    </Box>
  )
}

export default Menu
