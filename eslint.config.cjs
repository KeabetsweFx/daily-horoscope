module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended',
    '@react-native-community',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['jsdoc', 'react', 'prettier', '@typescript-eslint', 'react-hooks'],
  root: true,
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-member-accessibility': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        functions: false,
        classes: false,
      },
    ],
    'no-restricted-syntax': [0, 'ForOfStatement'],
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'jsdoc/require-returns': 0,
    'react/sort-comp': [
      1,
      {
        order: ['static-methods', 'lifecycle', 'render', 'everything-else'],
      },
    ],
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns-type': 0,
    'jsdoc/no-undefined-types': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'react/jsx-no-bind': 2,
    'no-extra-bind': 2,
    'no-underscore-dangle': 0,
    'no-nested-ternary': 0,
    'no-plusplus': 0,
    'no-magic-numbers': [
      2,
      {
        ignore: [-1, 0, 1, 2],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/no-unescaped-entities': 0,
    'spaced-comment': 2,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        exports: 'export',
      },
    },
  },
};
