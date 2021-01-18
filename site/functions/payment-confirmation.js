const Stripe = require("stripe")
const stripe = Stripe(process.env.GATSBY_STRIPE_API_SECRET, {
  maxNetworkRetries: 3,
})
const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
  url: process.env.MAILGUN_URL,
})

exports.handler = async ({ body, headers }) => {
  console.log("env:::   ", process.env)
  console.log("body:::    " + body)
  try {
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    )

    if (stripeEvent.type === "checkout.session.completed") {
      const session = await stripe.checkout.sessions.retrieve(
        JSON.parse(body).data.object.id,
        { expand: ["line_items.data.price.product", "customer"] }
      )

      // Send email "chit" to info@truetacolondon.com
      const html = `
        <html>
          <body>
            <h2><b>Customer:</b> ${session.shipping.name}</h2>
            <h3><b>Email:</b> ${
              session.customer.email ? session.customer.email : ""
            }</h3>
            <h3><b>Shipping:</b></h3>
            <ul style="list-style-type:none;padding-left:0;">
              <li><b>City:</b> ${
                session.shipping.address.city
                  ? session.shipping.address.city
                  : ""
              }</li>
              <li><b>Country:</b> ${
                session.shipping.address.country
                  ? session.shipping.address.country
                  : ""
              }</li>
              <li><b>Line 1:</b> ${
                session.shipping.address.line1
                  ? session.shipping.address.line1
                  : ""
              }</li>
              <li><b>Line 2:</b> ${
                session.shipping.address.line2
                  ? session.shipping.address.line2
                  : ""
              }</li>
              <li><b>Postal Code:</b> ${
                session.shipping.address.postal_code
                  ? session.shipping.address.postal_code
                  : ""
              }</li>
              <li><b>Province</b>: ${
                session.shipping.address.state
                  ? session.shipping.address.state
                  : ""
              }</li>
            </ul>
            <p><b>Pickup Time:</b> ${
              session.metadata.selectedTime ? session.metadata.selectedTime : ""
            }</p>
            <p><b>Notes:</b> ${
              session.metadata.notes ? session.metadata.notes : ""
            }</p>
            <table style="width:100%;border:1px solid black;border-collapse:collapse;">
              <thead>
                <tr>
                  <th style="border:1px solid black;border-collapse:collapse;padding:4px;text-align:left;vertical-align:top;">Item</th>
                  <th style="border:1px solid black;border-collapse:collapse;padding:4px;text-align:left;vertical-align:top;">Variant</th>
                  <th style="border:1px solid black;border-collapse:collapse;padding:4px;text-align:left;vertical-align:top;">Filling</th>
                  <th style="border:1px solid black;border-collapse:collapse;padding:4px;text-align:left;vertical-align:top;">Description</th>
                  <th style="border:1px solid black;border-collapse:collapse;padding:4px;text-align:left;vertical-align:top;">Quantity</th>
                </tr>
              </thead>
              <tbody>
              ${session.line_items.data
                .map(
                  item => `
                <tr>
                  <td style="border:1px solid black;border-collapse:collapse;padding:4px;text-align:left;vertical-align:top;">${
                    item.price.product.name
                  }</td>
                  <td style="border:1px solid black;border-collapse:collapse;padding:4px;text-align:left;vertical-align:top;">${
                    item.price.product.metadata.variant
                      ? item.price.product.metadata.variant
                      : ""
                  }</td>
                  <td style="border:1px solid black;border-collapse:collapse;padding:4px;text-align:left;vertical-align:top;">${
                    item.price.product.metadata.filling
                      ? item.price.product.metadata.filling
                      : ""
                  }</td>
                  <td style="border:1px solid black;border-collapse:collapse;padding:4px;text-align:left;vertical-align:top;">${
                    item.price.product.description
                      ? item.price.product.description
                      : ""
                  }</td>
                  <td style="border:1px solid black;border-collapse:collapse;padding:4px;text-align:left;vertical-align:top;">${
                    item.quantity
                  }</td>
                </tr>
              `
                )
                .join("\r\n")}
              </tbody>
            </table>
          </body>
        </html>
      `

      const data = {
        from: `Chit Bot <${process.env.MAIGLUN_SENDER_EMAIL}>`,
        to: process.env.MAILGUN_RECIPIENT_EMAIL,
        subject: `Chit for ${
          session.shipping.name || "dumdum who didn't supply an email >:("
        }`,
        html,
      }

      const mailgunSend = (...args) => {
        return new Promise((res, rej) => {
          mailgun.messages().send(...args, (err, body) => {
            if (err) return rej(err)
            res(body)
          })
        })
      }

      await mailgunSend(data)
        .then(body => console.log(body))
        .catch(err => console.log(err))
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
