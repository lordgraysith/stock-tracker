var events = require('monument').events;


events.on('route:/targets:get', function (connection) {
	'use strict';
	
	connection.res.end('route /targets now responding to get requests');
});

events.on('route:/targets:post', function (connection) {
	'use strict';
	
	connection.res.end('route /targets now responding to post requests');
});

events.on('route:/targets:patch', function (connection) {
	'use strict';
	
	connection.res.end('route /targets now responding to patch requests');
});