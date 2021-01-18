import { GiCookingPot } from "react-icons/gi"

export default {
  name: "filling",
  title: "Filling",
  icon: GiCookingPot,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "active",
      title: "Active",
      description:
        "Whether the product is currently available for purchase. Defaults to true.",
      type: "boolean",
    },
  ],
}
