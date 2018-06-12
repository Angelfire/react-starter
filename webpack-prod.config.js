const path = require("path");
const bundlePath = path.resolve(__dirname, "dist/");

module.exports = {
  mode: "production",
  entry: ["babel-polyfill", "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["env"], plugins: ["transform-class-properties"] }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|pdf)/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: "/[name].[ext]"
        }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    publicPath: bundlePath,
    filename: "bundle.js"
  }
};