export default {
  name: "pickupTime",
  title: "Pickup Time",
  type: "object",
  fields: [
    {
      name: "time",
      title: "Time",
      type: "string",
    },
    {
      name: "count",
      title: "Count",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "time",
      subtitle: "count",
    },
  },
}
