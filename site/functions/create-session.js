const stripe = require("stripe")(process.env.GATSBY_STRIPE_API_SECRET)

exports.handler = async ({ body }) => {
  const { cart, metadata, subtotal } = JSON.parse(body)

  try {
    const line_items = []
    const raw_items = Object.values(cart)

    raw_items.map(item => {
      const new_item = {
        price: item.sku,
        quantity: item.quantity,
        description: `${item.name}: ${item.description}`,
      }
      line_items.push(new_item)
    })

    const hst = {
      price_data: {
        currency: "cad",
        product_data: {
          name: "HST",
        },
        unit_amount_decimal: subtotal * 0.13,
      },
      quantity: 1,
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["CA"],
      },
      success_url: `${process.env.GATSBY_PRODUCTION_URL}/success`,
      cancel_url: process.env.GATSBY_PRODUCTION_URL,
      mode: "payment",
      line_items: [...line_items, hst],
      metadata,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    }
  } catch (error) {
    console.error(error)
  }
}
