var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('public'),
        filename: '[name].js'
    },

    devServer: {
        historyApiFallback: true,
        compress          : true,
        quiet             : false,
        noInfo            : false,
        headers           : {"X-Custom-Header" : "yes"},
        stats             : {colors: true},
        port              : 8080,
        inline            : false,
        hot               : true,
        watchOptions      : {
            poll: true
        }
    }
});