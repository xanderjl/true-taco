const stripe = require("stripe")(process.env.GATSBY_STRIPE_API_SECRET)

exports.handler = async ({ body }) => {
  try {
    const line_items = JSON.parse(body)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["CA"],
      },
      success_url: `${
        process.env.GATSBY_PRODUCTION_URL || "https://localhost:8888"
      }/success`,
      cancel_url: process.env.GATSBY_PRODUCTION_URL,
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
