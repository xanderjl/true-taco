export default {
  name: "cart",
  title: "Cart",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "gratuityText",
      title: "Gratuity Text",
      type: "text",
      rows: 2,
    },
    {
      name: "notesPlaceholder",
      title: "Notes Placeholder",
      type: "text",
      rows: 2,
    },
    {
      name: "times",
      title: "Available Times",
      type: "array",
      of: [{ type: "pickupTime" }],
    },
  ],
}
