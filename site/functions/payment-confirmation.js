const stripe = require("stripe")(process.env.GATSBY_STRIPE_API_SECRET)
const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
  url: process.env.MAILGUN_URL,
})

exports.handler = async ({ body, headers }) => {
  try {
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    )

    if (stripeEvent.type === "checkout.session.completed") {
      const session = await stripe.checkout.sessions.retrieve(
        JSON.parse(body).data.object.id,
        { expand: ["line_items"] }
      )
      console.log(JSON.parse(body, null, 2))

      const data = {
        from: "Chit Bot <postmaster@sandbox7f002a272f1e4364ad016df5c6b3e403.mailgun.org>",
        to: "alexanderjameslow@gmail.com",
        subject: `Chit for ${
          session?.shipping?.name || "dumdum who didn't supply an email >:("
        }`,
        template: "test",
        "h:X-Mailgun-Variables": { test: "test" },
      }

      mailgun.messages().send(data, (err, body) => {
        console.log(body)
      })

      // 1. Take session data and plant them in email template
      // 2. Send email "chit" to jo@truetacolondon.com
      // 3. Subtract line items from inventory of products in Sanity
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    }
  } catch (error) {
    console.log(`Stripe webhook failed with ${error}`)

    return {
      statusCode: 400,
      body: `Webhook Error: ${error.message}`,
    }
  }
}
