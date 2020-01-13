const base = require('./webpack.config.base');
const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(base, {
  entry: path.resolve(__dirname, '../../', 'src/index.tsx'),
  mode: 'production',
  output: {
    filename: 'index.[contenthash].js',
    path: path.resolve(__dirname, '../../', 'docs'),
    libraryTarget: 'umd'
  },
});
