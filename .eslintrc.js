module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'mantine',
    'plugin:@next/next/recommended',
    'plugin:jest/recommended',
    'plugin:storybook/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  plugins: [
    'testing-library',
    'jest',
    '@typescript-eslint',
    'prettier',
    'module-resolver',
  ],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'react/require-default-props': 'off',
    'import/no-unresolved': [
      2,
      {
        ignore: ['@core', 'layouts', 'pages', 'views'],
      },
    ],
  },
}
