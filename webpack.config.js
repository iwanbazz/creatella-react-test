const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const APP_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: APP_DIR + "/index.js",
  resolve: {
    extensions: [".js", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        include: APP_DIR,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
