const base = require('./webpack.config.base');
const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(
  base,
  {
    entry: path.resolve(__dirname, '../../', 'src/lib/index.tsx'),
    // mode: 'production',
    mode: 'development',

    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, '../../', 'dist'),
      libraryTarget: 'umd'
    },

    // release 构建时不打包 react
    externals: {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        Root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        Root: 'ReactDom',
      },
    }
  }
);
