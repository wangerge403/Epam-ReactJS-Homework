const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        src: './src/index.js'
    },
    devServer: {
        hot: true
    }
}