var path = require('path');
var config = require('./webpack.config');
var webpack = require('webpack');
config.output.publicPath = './';
config.plugins[0] = new webpack.DefinePlugin({
    'NODE_ENV': '"uat"',
});
module.exports = config;
