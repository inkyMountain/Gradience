const base = require('./webpack.config.base')

module.exports = {
  ...base,
  mode: 'development',
  devServer: {
    open: true,
    useLocalIp: true,
    host: '0.0.0.0'
  }
}
