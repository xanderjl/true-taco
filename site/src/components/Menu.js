/** @jsx jsx */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import { Box, Grid, Heading, Text, Flex } from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import { Container } from "./Layout"
import MenuItem from "./MenuItem"
import OrderButton from "./OrderButton"
import FrillsTop from "../images/frills/top.svg"
import FrillsBottom from "../images/frills/bottom.svg"

const Menu = props => {
  const data = useStaticQuery(graphql`
    {
      sanityMenu {
        isOpen
        heading
        _rawBody
      }
      allStripePrice {
        edges {
          node {
            product {
              id
              images
              name
              type
              active
              description
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

  return (
    <Box position="relative" css={frills} bg="black">
      <Container {...props}>
        <Heading
          mb="5rem"
          as="h1"
          color="white"
          fontWeight="400"
          fontSize="6xl"
          textAlign="center"
          textDecor="underline"
        >
          {heading}
        </Heading>
        {isOpen ? (
          <Box>
            <Grid
              mb="6rem"
              rowGap={["4rem", "4rem", "5rem"]}
              columnGap={["4rem", "4rem", "8rem"]}
              gridTemplateRows="auto"
              gridTemplateColumns={["minmax(0, 1fr)", "repeat(2, 1fr)"]}
            >
              {products.map(({ node: node }) => {
                const { name, description, images } = node.product

                return (
                  <MenuItem
                    key={node.id}
                    heading={name}
                    price={node.unit_amount / 100}
                    product={{
                      name,
                      description,
                      sku: node.id,
                      price: node.unit_amount,
                      currency: node.currency,
                      image: images[0],
                    }}
                  >
                    {description}
                  </MenuItem>
                )
              })}
            </Grid>
            <OrderButton w="6rem" h="auto" />
          </Box>
        ) : (
          <Flex
            dir="column"
            align="center"
            justify="center"
            color="white"
            fontSize={["lg", "3xl"]}
          >
            <BlockContent blocks={_rawBody} />
          </Flex>
        )}
      </Container>
    </Box>
  )
}

export default Menu
