const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const shouldUseBundleAnalyzer = process.argv.indexOf('--analyze') !== -1;

module.exports = {
  entry: path.resolve(__dirname, '../../', 'src/index.tsx'),

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: {
          options: {
            silent: true
          },
          loader: 'awesome-typescript-loader'
        },
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
    filename: 'index.js',
    path: path.resolve(__dirname, '../../', 'dist'),
    // umd is both compatible for nodejs and browser
    libraryTarget: 'umd'
  },

  devServer: {
    port: 7000
  },

  // stats: 'errors-only',

  plugins: [
    new CleanWebpackPlugin(),
    shouldUseBundleAnalyzer && new BundleAnalyzerPlugin()
  ].filter(Boolean),
};
