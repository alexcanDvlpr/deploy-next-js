const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    // Base Path
    basePath: '',
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? '/deploy-next-js/' : '',
    prueba: process.env.PRUEBA_ENV
}