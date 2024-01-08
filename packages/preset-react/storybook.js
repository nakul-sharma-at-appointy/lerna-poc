const config = require('./config')
const path = require('path')
const packageJson = require(path.resolve('package.json'))

const babel = (babelConfig = {}) => {
    config.babel.plugins.forEach(p => babelConfig.plugins.push(p))
    return babelConfig
}
const webpack = (webpackConfig = {}) => {
    config.webpack.plugins.forEach(p => webpackConfig.plugins.push(p))
    config.webpack.module.rules.forEach(p => webpackConfig.module.rules.push(p))
    webpackConfig.resolve.alias = {
        [packageJson.name]: path.resolve('src'),
        ...(webpackConfig.resolve.alias || {}),
        ...config.webpack.alias
    }
    return webpackConfig
}

module.exports = { babel, webpack }
