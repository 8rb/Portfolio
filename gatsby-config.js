/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Rodrigo Ramirez",
    titleTemplate: "%s · Web Developer Portfolio",
    description:
      "Web Development Portfolio of Rodrigo Ramirez. Front End Developer specialized in Single Page Application technologies such as: React and Vue.",
    url: "https://rodrigoramirez.dev", // No trailing slash allowed!
    image: "/static_logo.png", // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
    },
  ],
}
