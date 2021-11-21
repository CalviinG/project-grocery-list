module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/quotes': ['error', 'single'],
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: '~/**', group: 'parent', position: 'before' }
        ],
        pathGroupsExcludedImportTypes: ['builtin']
      }
    ],
    'import/prefer-default-export': 'off',
    'no-unused-expressions': 'off',
    'react/jsx-key': 'error',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
