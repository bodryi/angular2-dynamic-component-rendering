var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var path = require("path");

function dirPath(concatPath) {
	return path.join(__dirname, concatPath);
}

module.exports = {
	entry: {
		'app': './src/main.ts',
		'style': './src/sass/application.scss'
	},

	resolve: {
		extensions: [".js", ".coffee", ".ts", ".html", ".sass", ".css"],
		modules: [
			dirPath("/src"),
			dirPath("/src/sass"),
			"node_modules"
		]
	},

	module: {
		rules: [{
				test: /\.ts/,
				use: [{
						loader: 'ts-loader'
					},
					{
						loader: 'angular2-template-loader'
					}
				]
			},
			{
				test: /\.html/,
				loader: 'html-loader'
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader",
				options: {
					limit: 1000000000000,
					mimetype: "application/font-woff"
				}
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader',
				options: {
					limit: 65000,
					mimetype: "image/svg+xml"
				}
			},
			{
				test: /\.[ot]tf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader',
				options: {
					limit: 65000,
					mimetype: "application/octet-stream"
				}
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader',
				options: {
					limit: 65000,
					mimetype: "application/vnd.ms-fontobject"
				}
			},
			{
				test: /\.png$/,
				loader: 'url-loader',
				options: {
					mimetype: 'image/png'
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						"to-string-loader",
						"css-loader",
						"autoprefixer-loader",
						"sass-loader"
					]
				})
			},
			{
				test: /\.css$/,
				use: [
					"to-string-loader",
					"css-loader",
					"postcss-loader"
				]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),

		new ExtractTextPlugin({
			filename: "style.css",
			allChunks: true
		})
	]
};