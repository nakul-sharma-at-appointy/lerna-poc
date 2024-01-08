const path = require('path');
let babelPlugins = [];
let webpackPlugins = [];
let rules = [];
let alias = {}

try {
    require('babel-plugin-relay');
    babelPlugins = [
        ...babelPlugins,
        ['relay', {artifactDirectory: './src/__generated__'}]
    ];
} catch (e) {
}

try {
    require('@saastack/recurrence-rule');
    alias = {
        ...alias,
        rrule: '@saastack/recurrence-rule',
    }
} catch (e) {
}

try {
    require('babel-plugin-import');
    const libs = ['lodash', 'lodash-es', '@material-ui/icons', '@saastack/components', '@saastack/forms'];
    babelPlugins = [
        ...babelPlugins,
        ...libs.map(l => ['import', {libraryName: l, libraryDirectory: '', camel2DashComponentName: false}, l]),
    ];
} catch (e) {
}

try {
    const RelayCompilerWebpackPlugin = require('relay-compiler-webpack-plugin');
    const RelayCompilerLanguageTypescript = require('relay-compiler-language-typescript');
    webpackPlugins = [
        ...webpackPlugins,
        new RelayCompilerWebpackPlugin({
            schema: path.resolve('./schema.graphql'),
            src: path.resolve('./src'),
            languagePlugin: RelayCompilerLanguageTypescript.default,
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            artifactDirectory: path.resolve('./src/__generated__'),
            config: {
                customScalars: {
                    Duration: 'Int',
                    Timestamp: 'String',
                    Map: 'String',
                    Empty: '{}',
                    Bytes: 'String',
                },
            }
        })
    ];
} catch (e) {
}

const babel = {
    plugins: babelPlugins
};

const webpack = {
    alias: {
        ...alias,
        '@material-ui/core/RootRef': '@saastack/utils/RootRef',
        '@material-ui/core/ExpansionPanel': '@material-ui/core/Accordion',
        '@material-ui/core/ExpansionPanelActions': '@material-ui/core/AccordionActions',
        '@material-ui/core/ExpansionPanelDetails': '@material-ui/core/AccordionDetails',
        '@material-ui/core/ExpansionPanelSummary': '@material-ui/core/AccordionSummary',
    },
    plugins: webpackPlugins,
    module: {
        rules
    }
};

module.exports = {webpack, babel};
