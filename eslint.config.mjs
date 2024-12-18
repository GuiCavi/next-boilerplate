import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import stylisticPlugin from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["./src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
        ...globals.node,
      },
    },
  },
  ...compat.config({
    extends: ["next/core-web-vitals"],
  }),
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    plugins: {
      "@stylistic": stylisticPlugin,
      "import": importPlugin,
      "react-hooks": hooksPlugin,
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@stylistic/no-extra-semi": "error",

      "@stylistic/no-multiple-empty-lines": ["error", { "max": 1 }],
      "@stylistic/space-infix-ops": ["error", { "int32Hint": false }],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/jsx-quotes": ["error", "prefer-double"],
      "@stylistic/object-property-newline": ["error", { allowAllPropertiesOnSameLine: false }],

      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          "allowWithName": "Props$",
        },
      ],
      "@stylistic/padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: "return",
        },
        {
          blankLine: "always",
          prev: "*",
          next: "function",
        },
      ],
      "@stylistic/comma-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],
      "@stylistic/object-curly-newline": [
        "error",
        {
          ObjectExpression: {
            multiline: true,
            consistent: true,
          },
          ObjectPattern: {
            multiline: true,
            consistent: true,
          },
          ImportDeclaration: {
            multiline: true,
            minProperties: 3,
            consistent: true,
          },
        },
      ],
      "import/no-anonymous-default-export": "off",
      "import/order": [
        "error",
        {
          named: true,
          "newlines-between": "always",
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "type",
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "{.,..}/**/*.{css,scss}",
              group: "type",
              position: "after",
            },
          ],
          distinctGroup: true,
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true,
        },
      ],
      "import/newline-after-import": [
        "error",
        {
          count: 1,
          exactCount: true,
          considerComments: true,
        },
      ],
    },
  },
];
