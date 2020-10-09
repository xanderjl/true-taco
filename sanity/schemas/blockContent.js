export default {
  name: "blockContent",
  title: "Block Content",
  type: "object",
  fields: [
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
}
