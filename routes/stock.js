var events = require('monument').events;


events.on('route:/stock:get', function (connection) {
	'use strict';
	var symbol = /symbol\=(.+?)$/.exec(connection.req.url)[1];
	events.on('data:set:stock',gotStock);
	events.emit('data:get:stock', symbol);
	
	function gotStock(stock){
		connection.res.end(JSON.stringify(stock));
	}
});
