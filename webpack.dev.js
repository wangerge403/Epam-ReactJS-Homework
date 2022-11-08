const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require("path");
const baseWebpackConfig = require("./webpack.config.js");//基础配置

let config = merge(baseWebpackConfig, {
  /*设置开发环境*/
  mode: 'development',
  output: {
    path: path.resolve('src'),
    filename: 'js/[name].js',
    chunkFilename: "js/[name].js",
    publicPath: ''
  },
  plugins: [
    /*设置热更新*/
    new webpack.HotModuleReplacementPlugin(),
  ],
  /*设置api转发*/
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    historyApiFallback: true,
  }
});
module.exports = config;