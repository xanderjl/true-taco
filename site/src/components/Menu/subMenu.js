import React from "react"
import { Grid, Text } from "@chakra-ui/react"
import MenuItem from "./MenuItem"

const SubMenu = ({ menu, isOpen }) => {
  console.log(menu, isOpen)
  return (
    <Grid
      m="0 auto 5rem auto"
      templateColumns={{
        base: "minmax(0, 1fr)",
        lg: "repeat(2, minmax(250px, 70ch))",
      }}
      gap={{ base: "2rem", md: "5rem" }}
    >
      {menu[0].edges.map(({ node }) => {
        const {
          id,
          productId,
          title,
          description,
          image,
          price,
          fillings,
          options,
        } = node

        return (
          <MenuItem
            key={id}
            shopOpen={isOpen}
            heading={title}
            price={price}
            product={{
              id: productId.current,
              name: title,
              price: price * 100,
              image: image?.image.asset.fluid.src,
              currency: "CAD",
              description,
              price_data: {
                metadata: {},
              },
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
