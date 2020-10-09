import S from "@sanity/desk-tool/structure-builder"
import { GrClipboard } from "react-icons/gr"
import { GiKnifeFork } from "react-icons/gi"

const hiddenDocTypes = (listItems) =>
  !["menu", "catering"].includes(listItems.getId())

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
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
