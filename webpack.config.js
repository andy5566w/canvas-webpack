const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    publicPath: "dist/", // webpack 4+ is unnecessary to add this fields.
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
