module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config
    .plugin('provide')
    .use(require('webpack').ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: 'popper.js'
    }])
  }
};
