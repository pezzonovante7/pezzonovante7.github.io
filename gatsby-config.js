/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Portfolio",
    description: "This is Portfolio Site",
    author: "@pezzonovante7",
    twitterUsername: "@vector_teal",
    image: "/twitter-img.png",
    siteUrl: "https://pezzonovante7.github.io",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "favicon",
        icon: "src/assets/dave.svg",
      },
    },
  ],
}
