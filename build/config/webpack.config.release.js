const base = require('./webpack.config.base');

module.exports = {
  ...base,
  mode: 'production',
  // release构建时不打包react
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
};
