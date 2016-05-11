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
	entry : './app/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},

	resolve: {
		root: __dirname,
		alias: {
			OpenWeatherMap: 'app/api/OpenWeatherMap.jsx'
		},
		
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