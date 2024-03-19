module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'jest', 'prettier'],
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
