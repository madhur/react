// module.exports = {
// 	entry : './js/app.js',
// 	output: {
// 		path: __dirname,
// 		filename: './js/bundle.js'
// 	},

// 	resolve: {
// 		extensions: ['', '.js', '.jsx']
// 	}
// }


module.exports = {
	entry : './js/ud8.jsx',
	output: {
		path: __dirname,
		filename: './js/bundle.js'
	},

	resolve: {
		extensions: ['', '.jsx', '.js' ]
	},
	module : {
		loaders: [
			{
				loader: 'babel-loader',
				query : {
					presets: [
						'react', 'es2015'
					]
				},
				test: /\.jsx?$/,
				exclude: /(node_modules| bower_components)/
			}
		]
	}
}