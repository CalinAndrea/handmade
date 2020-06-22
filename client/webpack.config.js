const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: {
    main: "./src"
  },
  output: {
    path: path.resolve(__dirname, "client/public"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {test: /\.css$/,
       use: [MiniCssExtractPlugin.loader,"css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./client/src/index.html"}),
    new MiniCssExtractPlugin({filename: "[name].css"})
  ]
}