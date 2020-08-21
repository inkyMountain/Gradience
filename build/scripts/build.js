const webpack = require('webpack');
const releaseConfig = require('../config/webpack.config.docs');

const compiler = webpack(releaseConfig);
compiler.run((error, stats) => {
  // const assets = stats.compilation.assets;
  console.log('webpack complication done.');
});
