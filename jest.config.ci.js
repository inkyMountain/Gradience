const base = require('./jest.config');
const config = Object.assign({}, base, {
  collectCoverage: false,
  reporters: ['default', 'jest-junit'],
});
module.exports = config;
