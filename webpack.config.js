const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: './src/index.js', // Entry point of your application
	output: {
		filename: 'index.bundle.js', // Output bundle file name
		path: path.resolve(__dirname, 'dist'), // Output directory
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
			},
		],
	},
}
