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
