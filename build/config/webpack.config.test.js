const base = require('./webpack.config.base');

module.exports = {
  ...base,
  entry: path.resolve(__dirname, '../../', 'src/lib/index.tsx'),
  mode: 'development'
};
