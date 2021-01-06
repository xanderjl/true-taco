import React from "react"
import { Grid, Text } from "@chakra-ui/react"
import MenuItemVariant from "./MenuItemVariant"
import MenuItem from "./MenuItem"

const SubMenu = menu => {
  return (
    <Grid
      m="0 auto 5rem auto"
      templateColumns={{
        base: "minmax(0, 1fr)",
        lg: "repeat(2, minmax(250px, 70ch))",
      }}
      gap={{ base: "2rem", md: "5rem" }}
    >
      {menu.data.map(({ edges }, i) => {
        // If there are multiple options for item
        if (edges.length > 1) {
          return (
            <MenuItemVariant
              key={i}
              variants={edges}
              metadata={edges[0].node.product.metadata}
            />
          )
        }

        return edges.map(({ node }) => {
          const { name, description, images, metadata } = node.product

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
                price_data: {},
              }}
              metadata={metadata}
            >
              <Text mb="1rem" fontSize="lg" color="white">
                {description}
              </Text>
            </MenuItem>
          )
        })
      })}
    </Grid>
  )
}

export default SubMenu
