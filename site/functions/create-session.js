const stripe = require("stripe")(process.env.GATSBY_STRIPE_API_SECRET)

exports.handler = async ({ body }) => {
  const { cart, metadata, amount_subtotal } = JSON.parse(body)

  try {
    const line_items = []
    const raw_items = Object.values(cart)

    raw_items.map(item => {
      const new_item = {
        price: item.sku,
        quantity: item.quantity,
        description: item.name,
      }
      line_items.push(new_item)
    })

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
      metadata,
      amount_subtotal,
      amount_total: amount_subtotal * 1.13,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    }
  } catch (error) {
    console.error(error)
  }
}
