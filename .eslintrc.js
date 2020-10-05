module.exports = {
  'extends': ['taro/react'],
  globals: {},
  rules: {
    'no-void': 0,
    'react/jsx-curly-newline': 0,
    'prefer-object-spread': 0,
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'react/jsx-no-bind': ['error', { allowBind: true, allowArrowFunctions: true }],
  }
};
