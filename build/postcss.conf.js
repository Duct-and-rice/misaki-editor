var isProduction = process.env.NODE_ENV === 'production'

module.exports = [
    require('postcss-import')(),
    require('postcss-cssnext')(),
    require('postcss-custom-properties')(),
    require('postcss-nesting')()
]
