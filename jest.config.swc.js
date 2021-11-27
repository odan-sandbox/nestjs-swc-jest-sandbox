// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./jest.config');

const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'));

module.exports = {
  ...config,
  transform: {
    '^.+\\.(t|j)s$': ['@swc/jest', { ...config }],
  },
};
