export default {
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    {
      name: "isOpen",
      title: "Open for Business",
      type: "boolean",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "body",
      title: "Closed Copy",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "menus",
      title: "Menus",
      type: "array",
      of: [{ type: "reference", to: [{ type: "subMenu" }] }],
    },
  ],
}
