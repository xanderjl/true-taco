import React from "react"
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

const CartGratuity = ({
  subText,
  value,
  gratuity,
  gratuityType,
  handleValue,
  handleGratuity,
  handleGratuityType,
}) => {
  const format = val => `$` + val

  return (
    <Stack direction="column" spacing={4} mb="1.25rem">
      <Flex direction="column">
        <Heading as="h3" size="md" fontWeight="bold" fontFamily="body">
          Gratuity:
        </Heading>
        <Heading as="h3" size="sm" fontFamily="body">
          {subText}
        </Heading>
      </Flex>
      <Select
        maxW="13ch"
        size="sm"
        value={gratuityType}
        onChange={handleGratuityType}
      >
        <option value="none">None</option>
        <option value="percentage">Percentage</option>
        <option value="dollar">Dollar</option>
      </Select>
      {gratuityType === "percentage" ? (
        <Select
          maxW="13ch"
          size="sm"
          value={gratuity}
          onChange={handleGratuity}
        >
          <option value="15%">15%</option>
          <option value="18%">18%</option>
          <option value="25%">25%</option>
        </Select>
      ) : gratuityType === "dollar" ? (
        <NumberInput
          maxW="13ch"
          size="sm"
          onChange={handleValue}
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
