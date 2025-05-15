const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-config-prettier');
const globals = require('globals');
const path = require('path');

/** @type {import('eslint').Config[]} */
module.exports = [
  // Base ignore patterns
  {
    ignores: ["lib/**", "dist/**", "node_modules/**", "**/*.d.ts", "**/*.spec.ts", "**/*.test.ts"]
  },
  // Base configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // Build and config files override
  {
    files: ["*.config.js", "gulpfile.js", "webpack.config.js", "libpackage.js"],
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
      "@typescript-eslint/no-unused-vars": "off",
      "no-undef": "off"
    }
  },
  // TypeScript specific rules
  {
    files: ["src/**/*.ts", "src/**/*.tsx", "**/*.spec.ts", "**/*.test.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: path.resolve(__dirname),
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
  },
  // CommonJS module rules
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        require: true,
        module: true,
        exports: true,
        __dirname: true,
        __filename: true
      }
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off'
    }
  },
  // Declaration files
  {
    files: ["**/*.d.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: path.resolve(__dirname),
        ecmaVersion: 2020,
        sourceType: "module"
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-namespace': 'off'
    }
  }
];
