module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['off'],
    'indent': ['error', 4], // 4 spaces ident
    'linebreak-style': ['error', 'unix'], // lf
    'semi': ['error','never'], // no semicolon
    'quotes': ['error','single', {'avoidEscape': true}], // single quotes
    'object-curly-spacing': ['error', 'never', {'arraysInObjects': false, 'objectsInObjects': false}] // no spaces in braces
  }
}
