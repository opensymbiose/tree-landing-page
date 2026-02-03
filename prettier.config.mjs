/** @type {import('prettier').Config} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  useTabs: false,
  plugins: ['prettier-plugin-astro'],
};

export default config;
