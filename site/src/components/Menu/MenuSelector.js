import { Heading, Select } from "@chakra-ui/react"
import React from "react"

const MenuSelector = ({ heading, name, price }) => {
  return (
    <>
      <Heading size="lg" color="white">
        {heading}
      </Heading>
      <Select>{items}</Select>
    </>
  )
}

export default MenuSelector
