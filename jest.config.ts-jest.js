// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./jest.config');

module.exports = {
  ...config,
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
