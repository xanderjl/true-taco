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
      {menu.data[0].edges.map(({ node }) => {
        const { id, title, description, image, price, fillings, options } = node

        // if (options?.length > 1) {
        //   return <MenuItemVariant key={id} variants={node} />
        // }

        return (
          <MenuItem
            key={id}
            heading={title}
            price={price}
            product={{
              id,
              name: title,
              price: price * 100,
              image,
              currency: "CAD",
              description,
              price_data: {},
            }}
            metadata={{ options, fillings }}
          >
            <Text mb="1rem" fontSize="lg" color="white">
              {description}
            </Text>
          </MenuItem>
        )
      })}
    </Grid>
  )
}

export default SubMenu
