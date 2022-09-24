const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '~': path.join(path.resolve(__dirname, './src')),
    },
    watchOptions: {
      ignored: '**/node_modules',
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src$1',
      },
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@font-family': "'Gilroy', sans-serif",
              '@primary-color': '#E02B59',
              '@success-color': '#32bb60',
              '@error-color': '#E02B59',
              '@warning-color': '#FF7B4F',
              '@normal-color': '#274C6C',
              '@border-radius-base': '8px',
              '@text-color': '#546E7A', // major text color
              '@text-color-secondary': '#274C6C',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
