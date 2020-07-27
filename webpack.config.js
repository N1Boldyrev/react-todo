module.exports = [
	{
		entry: __dirname + "/app/index.jsx",
		output: {
			path: __dirname + "/",
			filename: "app.js",
			publicPath: "/"
		},
		module: {
			rules: [
				{
					test: /\.jsx$/,
					use: "babel-loader",
					exclude: [/node_modules/]
				},
				{
					test: /\.scss$/,
					use: [
						"style-loader",
						"css-loader",
						"sass-loader"
					]
				}
			]
		}
	}
];
