// eslint.config.cjs
const prettierPlugin = require("prettier");
const reactPlugin = require("eslint-plugin-react");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = [
  {
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: "readonly",
        node: "readonly",
      },
    },
    plugins: {
      prettier: prettierPlugin,
      react: reactPlugin,
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
  {
    languageOptions: {
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
      ],
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      "prettier/prettier": "error",
    },
  },
];
