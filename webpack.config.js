const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
      scriptLoading: 'blocking'
    })
  ]
};
