module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:react/jsx-runtime',
    'plugin-testing-library/react',
    'plugin:jest/all',
  ],
  overrides: [],
  parser: '@babel/eslint-parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
      babelOptions: {
        presets: ['@babel/preset-react'],
      },
      plugins: ['jsx'],
    },
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: ['react', 'prettier', 'react-hooks', 'jsx'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 'off',
  },
};
