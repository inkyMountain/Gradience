const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../../', 'src/index.tsx'),

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  module: {
    rules: [
      //  transpile ts/tsx to js
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }
    ]
  },

  output: {
    filename: 'main.[chunkhash].js',
    path: path.resolve(__dirname, '../../', 'dist'),
    // umd is both compatiable for nodejs and browser
    libraryTarget: 'umd'
  },

  devServer: {
    port: 7000
  },

  plugins: [
    //  auto inject .js file to template.html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../', 'template.html'),
    })
  ],
};
