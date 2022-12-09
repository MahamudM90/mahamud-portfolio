module.exports = {
  siteMetadata: {
    title: `Mahamud | Software Engineer`,
    description: `I’m Mahamud, A Software Engineer, from Bangladesh.`,
    author: `Mahamud`,
    siteUrl: 'https://lgope.github.io/',
    social: {
      twitter: 'Mahamudm_90',
      instagram: 'mahamud_m90',
      linkedin: 'mahamudm90',
      github: 'mahamudm90',
      email: 'mahamud.sovtdev@gmail.com',
    },
    // name of the image for social website share, should be in static folder
    imageShare: `share.png`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-154878086-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    `gatsby-plugin-use-dark-mode`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Montserrat`,
    //         subsets: [`latin`],
    //       },
    //       {
    //         family: `Montserrat`,
    //         variants: [`200`, `400`, `400i`, `600`, `600i`, `700`],
    //       },
    //     ],
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mahamud | Software Engineer`,
        short_name: `Mahamud`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#127EB1`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
