const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [paths.src + '/index.js'],

  output: {
    filename: '[name].bundle.js',
    path: paths.build,
    publicPath: '/'
  },

  module: {
    rules: [
      {
        exclude: /node_module/,
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.src + '/index.html'
    })
  ]
};
