module.exports = {
  entry: {
		index: './src/index.js',
	},
  output: {
    path: __dirname + '/build',
    filename: '[name]-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
				exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
				exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
