import sanityClient from "@sanity/client"

const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
})

export default client
