module.exports = {
  siteMetadata: {
    siteUrl: "https://zaid-dev.com/",
    title: "Zaid | Freelance Front-end Developer & Web Designer",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WR6KV3C',
        includeInDevelopment: true,
        
      }
    }
  ],
};
