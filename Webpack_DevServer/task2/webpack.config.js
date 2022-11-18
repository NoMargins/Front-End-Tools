const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, arg) => {
	const isProduction = arg.mode === 'production';
	const config = {
		entry: './src/index.js',
		output: {
			filename: 'bundle.js',
		},
		devtool: 'eval-source-map',
		module: {
			rules: [
				{
					test: /\.s?css$/i,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /\.js$/i,
					use: ['babel-loader'],
				},
				{
					test: /\.(jpg|png)$/i,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 8192,
								name: '[name].[ext]',
								outputPath: 'images',
							},
						},
					],
				},
			],
		},
		plugins: [
			new webpack.ProgressPlugin(),
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
		],
		devServer: {
			compress: true,
			port: 9000,
			hot: true,
		},
	};
	if (isProduction) {
		config.plugins.push(
			new MiniCssExtractPlugin({
				filename: '[name].css',
			})
		);
	}

	return config;
};
