const path = require("path");

// Configure import alias
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@images": path.resolve(__dirname, "src/images"),
        "@components": path.resolve(__dirname, "src/components"),
      },
    },
  });
};

// Create project pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            path
          }
        }
      }
    }
  `);
  response.data.allContentfulProject.edges.forEach((edge) => {
    createPage({
      path: `/projects/${edge.node.path}`,
      component: path.resolve("./src/templates/project-post.js"),
      context: {
        slug: edge.node.path,
      },
    });
  });
};
