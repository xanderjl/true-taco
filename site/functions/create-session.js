const stripe = require("stripe")(process.env.GATSBY_STRIPE_API_SECRET)

exports.handler = async e => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["CA"],
      },
      success_url: `${process.env.URL}/success.html`,
      cancel_url: process.env.URL,
      line_items: JSON.parse(e.body),
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    }
  } catch (error) {
    console.error(error)
  }
}
