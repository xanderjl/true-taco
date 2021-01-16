const fetch = require("node-fetch")
require("dotenv").config()

exports.handler = async (event, context) => {
  console.log(
    `{\ncontext: ${JSON.stringify(context, null, 2)},\nevent: ${JSON.stringify(
      event,
      null,
      2
    )}\n}`
  )
  try {
    await fetch("https://api.github.com/repos/XanderJL/true-taco/dispatches", {
      method: "POST",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ event_type: "sanity-deploy" }),
    })
  } catch (error) {
    console.log(error)
    return { statusCode: 500, body: "failed" }
  }

  return { statusCode: 200, body: "succeeded!" }
}