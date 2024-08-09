import jsPlugin from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import twPlugin from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'eslint-plugin-import': importPlugin,
    },
    rules: {
      'eslint-plugin-import/first': 'error',
      'eslint-plugin-import/newline-after-import': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            [
              // Packages. `react` related packages come first.
              '^react',
              '^@?\\w',
              // Important! to not have line breaks between groups
              '^[^.]',
              '^\\.',
              // Internal packages.
              '^(components|modules|utils)(/.*|$)',
              // Side effect imports.
              '^\\u0000',
              // Parent imports. Put `..` last.
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              // Other relative imports. Put same-folder imports and `.` last.
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$',
              // Style imports.
              '^.+\\.s?css$',
            ],
          ],
        },
      ],
    },
  },

  {
    plugins: { 'jsx-a11y': jsxA11y },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
  },

  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules['next/core-web-vitals'],
      '@next/next/no-img-element': 'error',
    },
  },

  {
    plugins: { react: reactPlugin },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },

  {
    plugins: { 'react-hooks': reactHooksPlugin },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },

  {
    plugins: { '@typescript-eslint': tsEslint },
    rules: {
      ...tsEslint.configs.recommended.rules,
      ...tsEslint.configs.recommended.rules['requiring-type-checking'],
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },

  {
    plugins: { '@eslint/js': jsPlugin },
    rules: {
      ...jsPlugin.configs.recommended.rules,
      'no-unused-vars': 'error',
    },
  },

  {
    plugins: { tailwindcss: twPlugin },
    rules: {
      ...twPlugin.configs.recommended.rules,
      'tailwindcss/no-arbitrary-value': 'warn',
    },
  },

  {
    plugins: { 'eslint-plugin-prettier': prettierPlugin },
    rules: {
      'eslint-plugin-prettier/prettier': 'warn',
    },
  },

  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
        ...globals.es2021,
      },
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignores: ['**/node_modules/**', '**/.next/**', '**/cypress/**'],
  },
];
