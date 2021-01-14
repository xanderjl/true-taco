import sanityClient from "@sanity/client"

const sanityClient = sanityClient({
  projectId: process.env.GATSBY_SANITY_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
})

export default sanityClient
