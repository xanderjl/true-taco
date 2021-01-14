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
      name: "productId",
      title: "Product ID",
      type: "slug",
      description:
        "Necessary for Stripe to not throw a fit when a customer goes to check out. Make sure to click the generate button after giving your item a title!",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      description:
        "The product’s description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.",
      type: "text",
      rows: 4,
    },
    {
      name: "active",
      title: "Active",
      description:
        "Whether the product is currently available for purchase. Defaults to true.",
      type: "boolean",
    },
    {
      name: "menu",
      title: "Menu",
      type: "reference",
      to: [{ type: "subMenu" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.precision(2),
    },
    {
      name: "stock",
      title: "Stock",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      description: "Meant to be displayable to the customer.",
      type: "productImage",
      options: { hotspot: true },
    },
    {
      name: "fillings",
      title: "Fillings",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "options",
      title: "Options",
      type: "array",
      of: [{ type: "productOption" }],
    },
    {
      name: "extras",
      title: "Extras",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "product",
          },
          options: {
            filter: "menu._ref == $menu",
            filterParams: {
              menu: "99df0625-2558-4b36-bc53-469a3a0cbe15",
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image.image",
    },
  },
}
