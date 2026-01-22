module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'calculator.js',
    'server.js'
  ],
  coverageDirectory: 'coverage',
  testMatch: ['**/*.test.js']
};
