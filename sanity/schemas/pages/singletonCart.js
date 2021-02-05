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
      name: "startTime",
      title: "Open From",
      type: "datetime",
    },
    {
      name: "endTime",
      title: "Open Until",
      type: "datetime",
    },
    {
      name: "iterator",
      title: "Minute Divison",
      type: "number",
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
  ],
}
