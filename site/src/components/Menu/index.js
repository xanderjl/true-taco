import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import { Box, Heading, Flex } from "@chakra-ui/react"
import { Container } from "../Layout"
import OrderButton from "./OrderButton"
import FrillsTop from "../../images/frills/top.svg"
import FrillsBottom from "../../images/frills/bottom.svg"
import SubMenu from "./subMenu"
import Serializers from "../Serializers"

const Menu = props => {
  const data = useStaticQuery(graphql`
    {
      sanityMenu {
        isOpen
        heading
        menus {
          id
          title
        }
        _rawBody
        _rawOpenBody
      }
      allSanityProduct(filter: { active: { eq: true } }) {
        group(field: menu___title) {
          edges {
            node {
              menu {
                title
              }
              id
              productId {
                current
              }
              title
              description
              image {
                image {
                  asset {
                    fluid(maxWidth: 800) {
                      ...GatsbySanityImageFluid
                    }
                  }
                  hotspot {
                    x
                    y
                    height
                    width
                  }
                }
              }
              price
              fillings {
                id
                title
                active
              }
              options {
                title
                price
              }
              extras {
                id
                title
                price
                options {
                  title
                  price
                }
              }
            }
          }
        }
      }
    }
  `)

  const { menus, isOpen, heading, _rawBody, _rawOpenBody } = data.sanityMenu

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
          mb="3rem"
          color="white"
          fontWeight="400"
          textAlign="center"
          textDecor="underline"
        >
          {heading}
        </Heading>
        <Box maxW="70ch" m="0 auto" mb="5rem" color="white" fontSize="xl">
          {isOpen ? (
            <BlockContent blocks={_rawOpenBody} serializers={Serializers} />
          ) : (
            <BlockContent blocks={_rawBody} />
          )}
        </Box>
        {menus.map(({ title }, i) => {
          const products = data.allSanityProduct.group.filter(prod =>
            prod.edges.every(({ node }) => node.menu.title === title)
          )
          return (
            <Box key={i}>
              <Heading
                as="h2"
                size="3xl"
                mb="3rem"
                color="white"
                fontWeight="400"
                textDecor="underline"
              >
                {title}
              </Heading>
              <SubMenu menu={products} isOpen={isOpen} />
            </Box>
          )
        })}
        <OrderButton w="6rem" h="auto" />
      </Container>
    </Box>
  )
}

export default Menu
