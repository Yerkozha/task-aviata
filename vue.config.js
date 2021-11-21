const path = require('path')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const glob = require('glob');
module.exports = {
  lintOnSave: false,
  css: {
        requireModuleExtension: false,
        loaderOptions: {
            css: {
              modules: {
                localIdentName: '[name]-[hash]'
              },
              localsConvention: 'camelCaseOnly',
            }
          }
      },
    configureWebpack: {
        plugins: [
          new SpriteLoaderPlugin()
        ]
      },
  chainWebpack: config => {
    config.module.rules.delete('svg');

    config
      .entry('app')
      .clear()
      .add(path.resolve(__dirname, './src/main.js'))

    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))

    config
      .entry('sprite')
      .add(...glob.sync(path.resolve(__dirname, `./src/assets/icons/*.svg`)));

    config.module.rule('svg')
      .test(/\.(svg)(\?.*)?$/)
      .use('file-loader')
      .loader('svg-sprite-loader')
      .options({
        extract: true,
        spriteFilename: 'icons.svg'
      })

      config.module
      .rule("fonts")
      .test(/\.(ttf|otf|eot|woff|woff2)$/)
      .use("file-loader")
        .loader("file-loader")
        .tap(options => {
          options = {
            // limit: 10000,
            name: '/assets/fonts/[name].[ext]',
          }
          return options
        })
        .end()
  },
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/scss/_bem-mixin.scss'),
        path.resolve(__dirname, './src/scss/_variables.scss'),
        path.resolve(__dirname, './src/scss/_medias.scss'),
        path.resolve(__dirname, './src/scss/_reset.scss'),
        path.resolve(__dirname, './src/scss/_helpers.scss'),
        path.resolve(__dirname, './src/scss/_fonts.scss'),
      ],
    })
}