module.exports = {
  siteMetadata: {
    title: `True Taco`,
    description: `True Taco has offered authentic, fresh, Mexican and Salvadoran food to London, ON since 2009.`,
    author: `Alex Low`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-chakra-ui`,
      options: {
        isResettingCSS: true,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `6z3o6gu0`,
        dataset: `production`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
