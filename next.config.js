const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    // Base Path
    basePath: '',
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? '/deploy-next-js/' : '',
    PRUEBA_ENV: process.env.PRUEBA_ENV
}