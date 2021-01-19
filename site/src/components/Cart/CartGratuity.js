import React, { useState } from "react"
import {
  Flex,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
} from "@chakra-ui/react"

const CartGratuity = () => {
  const [gratuityType, setGratuityType] = useState(null)
  const [gratuity, setGratuity] = useState()
  const [value, setValue] = useState("0.00")

  const format = val => `$` + val
  const parse = val => val.replace(/^\$/, "")

  return (
    <Stack direction="column" spacing={4} mb="1.25rem">
      <Flex direction="column">
        <Heading as="h3" size="md" fontWeight="bold" fontFamily="body">
          Gratuity:
        </Heading>
        <Heading as="h3" size="sm" fontFamily="body">
          Tips are much appreciated!
        </Heading>
      </Flex>
      <Select
        maxW="13ch"
        size="sm"
        onChange={e => setGratuityType(e.target.value)}
      >
        <option value="none">None</option>
        <option value="percentage">Percentage</option>
        <option value="dollar">Dollar</option>
      </Select>
      {gratuityType === "percentage" ? (
        <Select
          maxW="13ch"
          size="sm"
          onChange={e => setGratuity(e.target.value)}
        >
          <option value="15%">15%</option>
          <option value="18%">18%</option>
          <option value="25%">25%</option>
        </Select>
      ) : gratuityType === "dollar" ? (
        <NumberInput
          maxW="13ch"
          size="sm"
          onChange={valueString => setValue(parse(valueString))}
          value={format(value)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      ) : null}
    </Stack>
  )
}

export default CartGratuity
