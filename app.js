var monument = require('monument');

require('./data/stock');
monument.server({
				routePath: './routes'
				, templatePath: './templates'
				, publicPath: './public'
				, port: process.env.PORT || 3000
			});