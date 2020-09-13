import Link from "next/link"
import { Box, Icon, Text } from "@chakra-ui/core"
import customTheme from "../styles/theme"

const OrderButton = (props) => {
  const { colors, fonts } = customTheme
  return (
    <Link href="/">
      <a>
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
      </a>
    </Link>
  )
}

export default OrderButton
