const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
};
