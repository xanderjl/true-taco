import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"
import singletonMenu from "./pages/singletonMenu"
import singletonCatering from "./pages/singletonCatering"
import blockContent from "./blockContent"
import product from "./product"
import productImage from "./productImage"
import productVariant from "./productVariant"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    singletonMenu,
    singletonCatering,
    blockContent,
    product,
    productVariant,
    productImage,
  ]),
})
