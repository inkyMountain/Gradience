const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config.base');
const path = require('path');

module.exports = {
  ...base,
  mode: 'development',
  plugins: [
    //  auto inject .js file to template.html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../', 'template.html'),
    }),
  ],
  devServer: {
    open: true,
    useLocalIp: true,
    host: '0.0.0.0'
  }
};
