// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'));

module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': ['@swc/jest', { ...config }],
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
