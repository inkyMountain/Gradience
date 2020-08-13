const webpack = require('webpack');
const releaseConfig = require('../config/webpack.config.release');

const compiler = webpack(releaseConfig);
compiler.run((error, stats) => {
  console.log('stats', stats);
  console.log('webpack complication done.');
});