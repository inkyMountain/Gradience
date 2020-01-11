const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../../', 'src/index.tsx'),

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/i, //图片文件
        loader: 'url-loader',
        options: {
          limit: 10240,
          fallback: {
            loader: 'file-loader',
            options: {
              name: `img/[name].[contenthash:8].[ext]`,
              esModule: false
            }
          }
        }
      },
    ]
  },

  output: {
    filename: 'index.[contenthash].js',
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
    }),
    new CleanWebpackPlugin()
  ],
};
