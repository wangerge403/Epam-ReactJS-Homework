const { merge } = require('webpack-merge');
const base = require('./webpack.config.js');
const path = require('path');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    static: [path.resolve(__dirname, 'dist'), path.resolve(__dirname, 'public')],
    host: 'localhost',
    port: 8080,
    open: true,
  },
});
