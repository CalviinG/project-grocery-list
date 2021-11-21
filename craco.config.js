// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@/core': path.resolve(__dirname, './src/core'),
      '~': path.resolve(__dirname, './src/client')
    }
  }
};
