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
        menus {
          id
          title
        }
        _rawBody
      }
      allSanityProduct(filter: { active: { eq: true } }) {
        group(field: menu___title) {
          edges {
            node {
              menu {
                title
              }
              id
              title
              price
              description
              fillings
              options {
                title
                price
              }
            }
          }
        }
      }
    }
  `)

  const { menus, isOpen, heading, _rawBody } = data.sanityMenu

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
            {menus.map(({ title }) => {
              const products = data.allSanityProduct.group.filter(prod =>
                prod.edges.every(({ node }) => node.menu.title === title)
              )
              return (
                <>
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
                  <SubMenu data={products} />
                </>
              )
            })}
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
