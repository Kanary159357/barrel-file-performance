const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  mode: "production",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js",
  },
  stats: "verbose",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: false,
    usedExports: false,
    innerGraph: false,
  },
};
