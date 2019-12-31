const base = require('./jest.config');
const config = Object.assign({}, base, {
  //  coverage
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/lib/*/**/*.{ts,tsx}', '!<rootDir>/src/lib/index.tsx', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/coverage',
  reporters: [
    'default',
    ['jest-junit', {
      'outputDirectory': './test-results/jest',
      'outputName': 'results.xml'
    }]
  ],
});
module.exports = config;
