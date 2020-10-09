import React from "react"
import { Link } from "gatsby"
import { Box, Flex, Icon, Text } from "@chakra-ui/core"

const OrderButton = props => {
  return (
    <Box d="block" w="max-content" m="0 auto">
      <Link to="/cart">
        <Flex flexDir="column" alignItems="center">
          <Text mb="1rem" fontSize="4xl" color="red.light" fontFamily="banner">
            ÌPROCEEDèTOèORDERÍ
          </Text>
          <Icon {...props} name="shop" color="white" />
        </Flex>
      </Link>
    </Box>
  )
}

export default OrderButton
