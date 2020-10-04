/** @jsx jsx */
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Box, Grid, Heading } from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import customTheme from "../gatsby-plugin-chakra-ui/theme"
import Container from "./Container"
import MenuItem from "./MenuItem"
import OrderButton from "./OrderButton"
import FrillsTop from "../images/frills/top.svg"
import FrillsBottom from "../images/frills/bottom.svg"

const Menu = props => {
  const { colors } = customTheme
  const data = useStaticQuery(graphql`
    {
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
    <Box position="relative" css={frills} bg={colors.black} mb="22px">
      <Container {...props}>
        <Heading
          mb="5rem"
          as="h1"
          color={colors.white}
          fontWeight="400"
          fontSize="6xl"
          textAlign="center"
          textDecor="underline"
        >
          <Link to="/">Saturday Pickup</Link>
        </Heading>
        <Grid
          mb="6rem"
          rowGap={["4rem", "4rem", "5rem"]}
          columnGap={["4rem", "4rem", "8rem"]}
          gridTemplateRows="auto"
          gridTemplateColumns={["minmax(0, 1fr)", "repeat(2, 1fr)"]}
        >
          {products.map(({ node: node }) => {
            const { id, name, description, images } = node.product

            return (
              <MenuItem
                key={id}
                heading={name}
                price={node.unit_amount / 100}
                product={{
                  name,
                  description,
                  sku: id,
                  price: node.unit_amount,
                  currency: node.currency,
                  image: images[0],
                }}
              >
                {description}
              </MenuItem>
            )
          })}
          {/* <MenuItem heading="Quesadillas" price="3.5-7">
            Mixed cheeses, tomatoes, green onions. Choose your filling. Choose
            your shell. Served with sour cream and sour cream.
          </MenuItem>
          <MenuItem heading="Taco Kit" price="3.5-7">
            Flavourful tacos with a variety of fillings served on a corn
            tortilla, topped with onion, cillantro, and a wedge of lime.
          </MenuItem>
          <MenuItem heading="Taquitos Dorados" price="7.5">
            Crispy, deepfried, rolled tacos made with your choice of filling.
            Topped with lettuce, sour cream and parmesean.
          </MenuItem>
          <MenuItem heading="Chile Relleno" price="5">
            Whole jalapeño stuffed with your choice of filling. Served with
            fried cheese and corn tortilla.
          </MenuItem>
          <MenuItem heading="Tostadas" price="3.5">
            Crispy, flat corn tortilla topped with refried beans, chicken,
            lettuce, sour cream and parmesan.
          </MenuItem>
          <MenuItem heading="Empanada Mexicana" price="3.5">
            Handmade corn tortilla, stuffed with your choice of filling. Served
            with lettuce, sour cream, and parmesan.
          </MenuItem> */}
        </Grid>
        <OrderButton w="6rem" h="auto" />
      </Container>
    </Box>
  )
}

export default Menu
