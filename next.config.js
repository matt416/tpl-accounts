module.exports = {
  i18n: {
    locales: ['en-CA'],
    defaultLocale: 'en-CA'
  },

  trailingSlash: true,

  async redirects() {
    return [
      {
        source: '/settings/',
        destination: '/settings/card/',
        permanent: true,
      },
    ]
  },
  // assetPrefix: './',
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     'holds': { page: '/holds' },
  //   }
  // },
}