import { FiClipboard } from "react-icons/fi"

export default {
  name: "subMenu",
  title: "Sub Menu",
  icon: FiClipboard,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Menu Title",
      type: "string",
    },
  ],
}
