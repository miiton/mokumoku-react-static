const path = require('path')
const SRC_PATH = path.join(__dirname, '../src')
const STORIES_PATH = path.join(__dirname, '../stories')
//dont need stories path if you have your stories inside your //components folder
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH, STORIES_PATH],
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: './.storybook/tsconfig.json',
        },
      },
      { loader: require.resolve('react-docgen-typescript-loader') },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = {
    '@types': path.resolve(__dirname, '../types'),
    '@root': path.resolve(__dirname, '../src'),
    '@containers': path.resolve(__dirname, '../src', 'containers'),
    '@components': path.resolve(__dirname, '../src', 'components'),
  }
  return config
}
