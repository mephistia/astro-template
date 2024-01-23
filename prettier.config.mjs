/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  newlineBeforeReturn: true,
  noDuplicateVariable: [true, 'check-parameters'],
  noVarKeyword: true,
  endOfLine: 'auto',
  printWidth: 80,
  useTabs: false,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
