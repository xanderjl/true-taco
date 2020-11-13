import React from "react"
import { Link as GaLink } from "gatsby"
import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { ShopIcon } from "../Icons"

const OrderButton = props => {
  return (
    <Box d="block" w="max-content" m="0 auto">
      <Link
        as={GaLink}
        to="/cart"
        _hover={{
          textDecor: "none",
        }}
      >
        <Flex flexDir="column" alignItems="center">
          <Text
            mb="1rem"
            fontSize="4xl"
            color="red.500"
            fontFamily="banner"
            _hover={{ color: "red.400" }}
          >
            ÌPROCEEDèTOèCHECKOUTÍ
          </Text>
          <ShopIcon
            {...props}
            name="shop"
            color="white"
            _hover={{ color: "red.50" }}
          />
        </Flex>
      </Link>
    </Box>
  )
}

export default OrderButton
