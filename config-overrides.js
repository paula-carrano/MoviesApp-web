const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  };
  return config;
};