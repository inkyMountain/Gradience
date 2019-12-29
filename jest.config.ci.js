const base = require('./jest.config');
const config = Object.assign({}, base, {
  collectCoverage: false,
  reporters: [
    'default',
    ['jest-junit', {
      'outputDirectory': './test-results/jest',
      'outputName': 'results.xml'
    }]
  ],
});
module.exports = config;
