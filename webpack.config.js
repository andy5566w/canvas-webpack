const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExreactPlugin = require("mini-css-extract-plugin");

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
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3 Kilobytes
          },
        },
      },
      {
        test: /.txt$/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: [MiniCssExreactPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExreactPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        // most of browser is unnecessary to user babel
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"], // this experimental JS feature has been already installed all modern browser, so it's no need to add this further
          },
        },
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExreactPlugin({
      filename: "style.css",
    }),
  ],
};
