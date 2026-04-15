import js from '@eslint/js';

const browserGlobals = {
  document: 'readonly',
  history: 'readonly',
  localStorage: 'readonly',
  location: 'readonly',
  navigator: 'readonly',
  requestAnimationFrame: 'readonly',
  URL: 'readonly',
  window: 'readonly',
};

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: browserGlobals,
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['tests/**/*.js'],
    languageOptions: {
      globals: {
        ...browserGlobals,
        describe: 'readonly',
        expect: 'readonly',
        it: 'readonly',
      },
    },
  },
];
