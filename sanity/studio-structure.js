import S from "@sanity/desk-tool/structure-builder"
import { GrClipboard } from "react-icons/gr"
import { GiKnifeFork } from "react-icons/gi"
import { AiOutlineInfoCircle } from "react-icons/ai"

const hiddenDocTypes = (listItems) =>
  !["menu", "catering", "about", "cart"].includes(listItems.getId())

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Menu")
        .icon(GrClipboard)
        .child(
          S.editor().id("menu").schemaType("menu").documentId("singletonMenu")
        ),
      S.listItem()
        .title("Catering")
        .icon(GiKnifeFork)
        .child(
          S.editor()
            .id("catering")
            .schemaType("catering")
            .documentId("singletonCatering")
        ),
      S.listItem()
        .title("About")
        .icon(AiOutlineInfoCircle)
        .child(
          S.editor()
            .id("about")
            .schemaType("about")
            .documentId("singletonAbout")
        ),
      S.listItem()
        .title("Cart")
        .icon(AiOutlineInfoCircle)
        .child(
          S.editor().id("cart").schemaType("cart").documentId("singletonCart")
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
