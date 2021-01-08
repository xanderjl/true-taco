export default {
  name: "productVariant",
  title: "Product Variant",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      description:
        "The product’s name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.",
      type: "string",
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
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.precision(2),
    },
    {
      name: "image",
      title: "Image",
      description: "Meant to be displayable to the customer.",
      type: "productImage",
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title: "title",
      price: "price",
      subtitle: "description",
      media: "images.0.image",
    },
    prepare: ({ title, price, subtitle, media }) => {
      return { title: `${title} $${price}`, subtitle, media }
    },
  },
}
