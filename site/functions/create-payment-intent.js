const stripe = require("stripe")(process.env.GATSBY_STRIPE_API_SECRET)

exports.handler = async ({ body }) => {
  const { cart, metadata } = JSON.parse(body)
  console.log(JSON.parse(body))

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currenty: "cad",
    metadata: {},
  })
}
