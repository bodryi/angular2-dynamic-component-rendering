const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const OptimizeJsPlugin = require('optimize-js-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
	devtool: 'eval',

	output: {
		path: helpers.root('public'),
		filename: '[name].js'
	},

	plugins: [
		new OptimizeJsPlugin({
			sourceMap: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			comments: false,
			mangle: {
				screw_ie8: true
			},
			compress: {
				screw_ie8: true,
				warnings: false,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true,
				negate_iife: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'ENV': JSON.stringify(ENV)
			}
		})
	]
});