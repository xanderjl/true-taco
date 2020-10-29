import React from "react"
import { Select } from "@chakra-ui/core"

const VariantSelector = ({ children }) => {
  return (
    <Select>
      {children.map((option, i) => {
        return <option value={`option${i}`}>{option}</option>
      })}
    </Select>
  )
}

export default VariantSelector
