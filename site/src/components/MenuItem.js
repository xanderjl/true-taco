/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { Flex, Heading, Text } from "@chakra-ui/core"
import customTheme from "../gatsby-plugin-chakra-ui/theme"

const MenuItem = ({ heading, price, children }) => {
  const { colors, fonts } = customTheme

  const dotLeaders = css`
    &::after {
      float: right;
      width: 0;
      margin-left: 1.25rem;
      white-space: nowrap;
      content: ". . . . . . . . . . . . . . . . . . . ";
    }
  `

  return (
    <Flex direction="column">
      <Flex
        maxW="40em"
        overflowX="hidden"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          css={dotLeaders}
          as="h2"
          color={colors.white}
          fontWeight="400"
          fontSize="5xl"
        >
          {heading}
        </Heading>
        <Heading
          d="inline-block"
          as="h2"
          pl="1.5rem"
          color={colors.white}
          bg={colors.black}
          fontFamily={fonts.banner}
          fontWeight="400"
          fontSize="4xl"
        >
          Õ{price}Ô
        </Heading>
      </Flex>
      <Text maxW="75%" color={colors.white}>
        {children}
      </Text>
    </Flex>
  )
}

export default MenuItem
