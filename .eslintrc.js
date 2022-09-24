module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: false,
          Boolean: false,
          Number: false,
          Symbol: false,
          '{}': false,
          Object: false,
          object: false,
          Function: false,
        },
        extendDefaults: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'unused-imports/no-unused-imports-ts': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
