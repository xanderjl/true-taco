import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"
import product from "./product"
import productImage from "./productImage"
import productVariant from "./productVariant"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([product, productVariant, productImage]),
})
