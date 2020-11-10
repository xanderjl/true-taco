/** @jsx jsx */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import { Box, Grid, Heading, Text, Flex } from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import { Container } from "../Layout"
import MenuItem from "./MenuItem"
import OrderButton from "./OrderButton"
import FrillsTop from "../../images/frills/top.svg"
import FrillsBottom from "../../images/frills/bottom.svg"

const Menu = props => {
  const data = useStaticQuery(graphql`
    {
      sanityMenu {
        isOpen
        heading
        _rawBody
      }
      allStripePrice(filter: { product: { active: { eq: true } } }) {
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
              }
            }
            unit_amount
            id
            currency
          }
        }
      }
    }
  `)

  const products = data.allStripePrice.edges
  const { isOpen, heading, _rawBody } = data.sanityMenu

  const lunchMenu = products.filter(
    ({ node: node }) => node.product.metadata.menu === "lunch"
  )
  const breakfastMenu = products.filter(
    ({ node: node }) => node.product.metadata.menu === "breakfast"
  )
  const toGoMenu = products.filter(
    ({ node: node }) => node.product.metadata.menu === "to-go"
  )

  const frills = css`
    &::before {
      overflow-x: hidden;
      position: absolute;
      top: -22px;
      width: 100%;
      height: 25px;
      content: "";
      background-repeat: repeat;
      background: url(${FrillsTop});
    }

    &::after {
      overflow-x: hidden;
      position: absolute;
      bottom: -22px;
      width: 100%;
      height: 22px;
      content: "";
      background: url(${FrillsBottom});
    }
  `

  const SubMenu = data => {
    return (
      <Grid
        mb="6rem"
        rowGap={{ base: "3rem", md: "5rem" }}
        columnGap={{ base: "3rem", md: "5rem" }}
        gridTemplateRows="auto"
        gridTemplateColumns={["minmax(0, 1fr)", "repeat(2, 1fr)"]}
      >
        {data.data.map(({ node: node }) => {
          const { name, description, images } = node.product

          return (
            <MenuItem
              key={node.id}
              heading={name}
              price={node.unit_amount / 100}
              product={{
                name,
                sku: node.id,
                price: node.unit_amount,
                image: images[0],
                currency: node.currency,
                description,
              }}
            >
              {description}
            </MenuItem>
          )
        })}
      </Grid>
    )
  }

  return (
    <Box position="relative" css={frills} bg="black">
      <Container maxW="5xl" m="0 auto" {...props}>
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
