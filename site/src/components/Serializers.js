import React from "react"
import { Heading, Link, List, ListItem, Text } from "@chakra-ui/react"

export default {
  types: {
    block: props => {
      const { style = "normal" } = props.node

      if (/^h\d/.test(style)) {
        return (
          <Heading as={style} fontFamily="body" fontSize="lg" pb="0.5rem">
            {props.children}
          </Heading>
        )
      }
      return <Text pb="1rem">{props.children}</Text>
    },
  },
  list: ({ children, type }) => {
    return (
      <List pb="1rem" styleType={type} stylePosition="inside">
        {children}
      </List>
    )
  },
  listItem: ({ children }) => {
    return <ListItem>{children}</ListItem>
  },
  marks: {
    link: ({ mark, children }) => {
      return (
        <Link href={mark.href} color="green.400">
          {children}
        </Link>
      )
    },
  },
}
