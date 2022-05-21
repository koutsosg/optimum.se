module.exports = {
  siteMetadata: {
    title: `Optimum städ AB`,
    description: `Fast, efficient, and honest, Optimum städ has become a reputable and well-known service provider.`,
    siteUrl: `https://optimumab.se`,
    image: "/logo.png",
    social: {
      twitter: ``,
    },
  },
  plugins: [/* {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-DJF6Q5SDEJ"
    }
  }, */
  {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-DJF6Q5SDEJ", // Google Analytics / GA
        /*    "AW-CONVERSION_ID", // Google Ads / Adwords / AW
        "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager) */
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIdsg

      /*     gtagConfig: {
        optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      }, */
    },
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Optimum Stad AB`,
        short_name: `Optimum AB`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#8a8a8a`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};