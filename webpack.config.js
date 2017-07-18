const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
	entry: './src/index.js',
	output: {
		path: path.resolve('./dist/assets'),
		filename: 'app.js',
		publicPath: './assets/'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	devServer: {
		contentBase: './src/',
		inline: true,
		open: true,
		port: 8080,
		hot: true,
		publicPath: '/assets/',
		historyApiFallback: true,
	},
	devtool: 'eval-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: '../index.html',
			inject: false,
		}),
	]
};

module.exports = config;