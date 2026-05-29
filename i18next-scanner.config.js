module.exports = {
  input: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    '!**/node_modules/**',
  ],
  output: './',
  options: {
    debug: false,
    removeUnusedKeys: true,
    sort: true,
    func: {
      list: ['t', 'i18next.t'],
      extensions: ['.ts', '.tsx'],
    },
    lngs: ['en', 'es'],
    defaultLng: 'en',
    defaultValue: '',
    resource: {
      loadPath: 'locales/{{lng}}/translation.json',
      savePath: 'locales/{{lng}}/translation.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
};
