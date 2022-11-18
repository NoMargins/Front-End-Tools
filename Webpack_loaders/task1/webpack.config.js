module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
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
};
