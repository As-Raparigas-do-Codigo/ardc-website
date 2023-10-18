module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'react/no-unescaped-entities': 'warn',
    'no-undef': 0,
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
