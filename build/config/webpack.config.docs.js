const base = require('./webpack.config.base');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
  entry: path.resolve(__dirname, '../../', 'src/index.tsx'),
  mode: 'production',
  output: {
    filename: '[name].[contenthash:6].js',
    path: path.resolve(__dirname, '../../', 'docs'),
    libraryTarget: 'umd'
  },
  plugins: [
    //  auto inject .js file to template.html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../', 'template.html'),
    }),
  ],
});
