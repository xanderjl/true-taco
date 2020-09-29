import React from "react"
import { Link } from "gatsby"
import { Box, Icon, Text } from "@chakra-ui/core"
import customTheme from "../gatsby-plugin-chakra-ui/theme"

const OrderButton = props => {
  const { colors, fonts } = customTheme
  return (
    <Link to="/">
      <Box d="flex" flexDir="column" alignItems="center">
        <Text
          mb="1rem"
          fontSize="4xl"
          color={colors.red.light}
          fontFamily={fonts.banner}
        >
          ÌPLACEèANèORDERÍ
        </Text>
        <Icon {...props} name="shop" color={colors.white} />
      </Box>
    </Link>
  )
}

export default OrderButton
