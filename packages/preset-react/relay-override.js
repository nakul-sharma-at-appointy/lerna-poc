const config = require('./config');

let overrides = [];
try {
    const {addBabelPlugin, addWebpackPlugin, addWebpackAlias} = require('customize-cra');
    overrides = [
        addWebpackAlias(config.webpack.alias),
        ...config.babel.plugins.map(p => addBabelPlugin(p)),
        ...config.webpack.plugins.map(p => addWebpackPlugin(p)),
    ];
} catch (e) {
}

module.exports = overrides;
