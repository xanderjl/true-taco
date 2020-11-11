const stripe = require("stripe")(process.env.GATSBY_STRIPE_API_SECRET)

exports.handler = async ({ body }) => {
  try {
    const line_items = JSON.parse(body)
    console.log("LINE ITEMS:::   " + JSON.stringify(line_items, null, 2))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["CA"],
      },
      success_url: `${process.env.GATSBY_PRODUCTION_URL}/success`,
      cancel_url: process.env.GATSBY_PRODUCTION_URL,
      mode: "payment",
      line_items,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    }
  } catch (error) {
    console.error(error)
  }
}
