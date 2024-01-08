# React preset for Saastack

One-liner react preset for saastack.

## Basic usage

```
yarn add -D @saastack/preset-react relay-compiler-webpack-plugin relay-compiler-language-typescript babel-plugin-relay babel-plugin-import customize-cra
```

Then add the following to `.storybook/main.js`:

```js
module.exports = {
    ...
    presets: [
      ...
      '@saastack/preset-react/storybook'
    ]
};
```

and add the following to `config-overrides.js`:

```js
const {override} = require('customize-cra');
const relayOverride = require('@saastack/preset-react/relay-override');
module.exports = override(
    ...
    ...relayOverride
);
```

and add the following to `babel.config.js`:

```js
const babelConfig = require('@saastack/preset-react/config').babel;
module.exports = {
    ...babelConfig,
    plugins: [
        ...
        ...(babelConfig.plugins || []),
    ]
    presets: [
        ...
        ...(babelConfig.presets || []),
    ]
};  
```