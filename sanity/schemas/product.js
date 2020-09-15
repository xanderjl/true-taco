import React from "react"

const chiles = () => {
  return <img src="../static/icons/dos-chiles.svg" alt="" />
}

export default {
  name: "product",
  title: "Product",
  icon: chiles,
  type: "document",
  initialValue: {
    active: true,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      description:
        "The product’s name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "active",
      title: "Active",
      description:
        "Whether the product is currently available for purchase. Defaults to true.",
      type: "boolean",
    },
    {
      name: "defaultVariant",
      title: "Default Product Variant",
      type: "productVariant",
    },
    {
      name: "productVariants",
      title: "Product Variants",
      type: "array",
      of: [{ title: "Variant", type: "productVariant" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      defaultVariant: "defaultVariant",
      productVariants: "productVariants",
      subtitle: "defaultVariant.description",
      media: "defaultVariant.images.0.image",
    },
    prepare: ({ title, defaultVariant, productVariants, subtitle, media }) => {
      const priceRange = []

      defaultVariant.price ? priceRange.push(defaultVariant.price) : null
      productVariants &&
        productVariants.forEach((variant) => {
          variant.price ? priceRange.push(variant.price) : null
        })

      const min = Math.min(...priceRange)
      const max = Math.max(...priceRange)

      const priceRangeString =
        priceRange.length > 0
          ? min === max
            ? `$${min}`
            : `$${min} - ${max}`
          : ""

      return {
        title: `${title} ${priceRangeString}`,
        subtitle,
        media: media,
      }
    },
  },
}
