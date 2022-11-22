module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'semi': ['error', 'never'],
    '@typescript-eslint/indent': ['error', 2, {
      'SwitchCase': 1,
    }],
    'quotes': ['error', 'single'],
    'no-var': 'error',
    'curly': 'error',
    'camelcase': ['error', { 'properties': 'always' }],
    'eol-last': 'error',
    'no-trailing-spaces': ['error'],
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'curly': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'warn',
    'eqeqeq': 'error',
    'dot-notation': 'error',
    'prefer-template': 'warn',
    '@typescript-eslint/consistent-type-imports': ['warn'],
  },
  ignorePatterns: [
      '**/*.json',
      'node_modules',
      'dist',
      '.eslintrc.js',
      'jest.config.js'
  ]
}
