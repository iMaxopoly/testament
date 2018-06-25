const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  mode: "production",

  entry: {
    index: ["babel-polyfill", "./src/index.js"]
  },

  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "./"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: [
          // { loader: "file-loader", options: { name: "[name].html" } },
          // "extract-loader",
          { loader: "html-loader", options: { minimize: true } }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [require("autoprefixer")(), require("cssnano")()]
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[ext]", useRelativePath: true }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "frontpage.html",
      template: "src/pages/frontpage.html"
    }),
    new HtmlWebpackPlugin({
      filename: "store.html",
      template: "src/pages/store.html"
    }),
    new HtmlWebpackPlugin({
      filename: "product.html",
      template: "src/pages/product.html"
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new UglifyjsWebpackPlugin({
      cache: true,
      parallel: true
    }),
    new CompressionPlugin()
  ]
}
