module.exports = {
    stories: ['../src/stories/*.stories.@(ts|tsx|js|jsx)'],
    addons: ['@storybook/preset-create-react-app'],
    presets: ['@saastack/preset-react/storybook'],
    framework: {
        name: "@storybook/react-webpack5",
        options: {
          builder: {
            useSWC: true,
          },
        },
      },
};

