const { merge } = require('webpack-merge');
const base = require('./webpack.config.js');
const path = require('path');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
});
