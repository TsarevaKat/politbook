const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const WebpackFtpUpload = require('webpack-ftp-upload-plugin');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
  //   new WebpackFtpUpload({
  //     host: '89.108.85.65',
  //     port: '21',
  //     username: 'katet771',
  //     password: 'pFvU80eRZl',
  //     local: baseWebpackConfig.externals.paths.dist,
  //     path: '/www/tsarevakat.ru/politbook',
  // })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
});