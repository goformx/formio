import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";

export default [
  // Base config for all files
  {
    ignores: ["lib/**", "dist/**", "node_modules/**", "*.d.ts", "*.spec.*", "*.test.*"],
  },
  // JavaScript config
  js.configs.recommended,
  // TypeScript config
  ...tseslint.configs.recommended,
  // TypeScript specific rules
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: ".",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
  prettier,
];
