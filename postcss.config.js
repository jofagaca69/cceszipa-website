module.exports = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {
      flexbox: 'no-2009'
    },
    'cssnano': {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        normalizeWhitespace: true,
        colormin: true,
        minifyFontValues: true,
        minifySelectors: true,
        mergeLonghand: true,
        mergeRules: true,
        minifyGradients: true,
        minifyParams: true,
        minifySelectors: true,
        normalizeCharset: true,
        normalizeUrl: true,
        orderedValues: true,
        reduceIdents: true,
        reduceInitial: true,
        reduceTransforms: true,
        uniqueSelectors: true,
        zindex: true
      }]
    }
  }
};
