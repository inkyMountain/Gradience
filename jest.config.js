module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: false,
  collectCoverageFrom: ['{lib,include}/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  reporters: ['default'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  // 目标测试文件的后缀
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'include'],

  // 为不好识别的文件映射替代的mock
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/file-mock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/object-mock.js',
  },
  // 任意位置的 __tests__ 文件夹下，以.unit.tsx等结尾的文件，会成为目标测试文件。
  testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
  transform: {
    '^.+unit\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>test/setupTests.js']
};
