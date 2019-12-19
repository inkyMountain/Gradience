const path = require('path');

module.exports = {
  entry: './src/index.tsx',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        include: path.resolve(__dirname, 'src')
      }
    ]
  },

  output: {
    filename: 'main.[chunkhash].js',
    publicPath: '/assets/'
  }
};