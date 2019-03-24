module.exports = {
  siteMetadata: {
    title: 'miniConf',
    author: 'Akanksha Choudhary',
    description: 'Learn React, GraphQL, Web Performance at miniConf',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'miniConf',
        short_name: 'miniConf',
        start_url: '/',
        background_color: '#5b5893',
        theme_color: '#5b5893',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
