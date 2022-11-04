module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'error',
    indent: [2, 2],
    'no-dupe-args': 2,
    'no-func-assign': 2,
    quotes: [2, 'single'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'react/prop-types': 0,
  },
};
