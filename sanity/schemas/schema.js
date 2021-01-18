import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"
import singletonMenu from "./pages/singletonMenu"
import singletonCatering from "./pages/singletonCatering"
import singletonAbout from "./pages/singletonAbout"
import blockContent from "./blockContent"
import product from "./product"
import productImage from "./productImage"
import productVariant from "./productVariant"
import subMenu from "./subMenu"
import productOption from "./productOption"
import stock from "./stock"
import pickupTime from "./pickupTime"
import singletonCart from "./pages/singletonCart"
import filling from "./filling"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    singletonMenu,
    singletonCatering,
    singletonAbout,
    singletonCart,
    blockContent,
    subMenu,
    product,
    filling,
    stock,
    pickupTime,
    productOption,
    productVariant,
    productImage,
  ]),
})
