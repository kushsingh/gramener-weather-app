const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "public/index.html",
    }),
  ],
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
                corejs: 3,
              },
            ],
            "@babel/preset-react",
          ],
        },
      },
    },
    {
      test: /\.(css|scss)$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "Fonts/",
          },
        },
      ],
    },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    port: 3000,
  },
};
