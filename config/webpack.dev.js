const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",

  entry: {
    index: ["babel-polyfill", "./src/index.js"]
  },

  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },

  devServer: {
    overlay: true,
    contentBase: "dist"
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
          "html-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: [
          { loader: "file-loader", options: { name: "images/[name].[ext]" } }
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
    })
  ]
}
