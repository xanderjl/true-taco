export default {
  name: "productImage",
  title: "Product Image",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      title: "Alt Text",
      description: "Alternative text is important for accessibility and SEO.",
      type: "string",
    },
  ],
}
