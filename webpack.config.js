const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				use: ['babel-loader', 'ts-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	devServer: {
		historyApiFallback: true,
		port: 9000
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};