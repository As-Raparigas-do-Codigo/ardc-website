module.exports = {
  '*.{js,jsx,ts,tsx,css}': 'eslint --config .eslintrc.js --fix',
  '*': 'prettier --ignore-unknown --write --config .prettierrc'
};
