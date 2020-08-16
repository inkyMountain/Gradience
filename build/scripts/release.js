const webpack = require('webpack');
const releaseConfig = require('../config/webpack.config.release');
const chalk = require('chalk');

const startMessage = chalk.blue(`Start build release version...`);
console.log(startMessage);

const compiler = webpack(releaseConfig);
compiler.run((error, stats) => {
  const successMessage = chalk.green(`Release version build success!`);
  const failMessage = chalk.red(`Release version build fail!`);
  console.log(error ? failMessage : successMessage);
});
