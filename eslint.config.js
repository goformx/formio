const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-config-prettier');
const globals = require('globals');

/** @type {import('eslint').Config[]} */
module.exports = [
  // Base ignore patterns
  {
    ignores: ["lib/**", "dist/**", "node_modules/**", "*.d.ts"]
  },
  // Base configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // Build and config files override
  {
    files: ["*.config.js", "gulpfile.js", "webpack.config.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "commonjs",
      globals: {
        require: true,
        module: true,
        __dirname: true,
        process: true,
      }
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "off"
    }
  },
  // TypeScript specific rules
  {
    files: ["src/**/*.ts", "src/**/*.tsx", "**/*.spec.ts", "**/*.test.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: ".",
        ecmaVersion: 2020,
        sourceType: "module"
      },
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'camelcase': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
      ],
      'max-lines-per-file': 'off',
      'sort-keys': 'off',
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    }
  }
];
