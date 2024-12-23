module.exports = {
  semi: true,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: "none",
  jsxSingleQuote: false,
  bracketSpacing: true,
  importOrder: [
    "react",
    "^(?!react)\\w+$",
    "<THIRD_PARTY_MODULES>",
    "^assets/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require("prettier-plugin-import-sort")],
};
