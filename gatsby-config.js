require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const routes = [
  {
    type: "ig_links",
    path: "/ig-links",
  },
];

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.aylinmarie.co",
    title: "aylin-marie",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        schemas: {
          my_deleted_schema: {},
        },
        routes,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
