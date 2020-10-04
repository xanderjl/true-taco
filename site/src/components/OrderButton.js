import React from "react"
import { Link } from "gatsby"
import { Box, Flex, Icon, Text } from "@chakra-ui/core"
import customTheme from "../gatsby-plugin-chakra-ui/theme"

const OrderButton = props => {
  const { colors, fonts } = customTheme
  return (
    <Box d="block" w="max-content" m="0 auto">
      <Link to="/">
        <Flex flexDir="column" alignItems="center">
          <Text
            mb="1rem"
            fontSize="4xl"
            color={colors.red.light}
            fontFamily={fonts.banner}
          >
            ÌPLACEèANèORDERÍ
          </Text>
          <Icon {...props} name="shop" color={colors.white} />
        </Flex>
      </Link>
    </Box>
  )
}

export default OrderButton
