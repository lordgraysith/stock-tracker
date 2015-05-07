var events = require('monument').events,
  http = require('http');

events.on('data:get:stock', function (symbol) {
  'use strict';
    http.get('http://finance.yahoo.com/webservice/v1/symbols/'+symbol+'/quote?format=json',function(res){
    	var body = '';
    	res.on('data',function(chunk){
    		body += chunk;
    	});
    	res.on('end',function(){
    		events.emit('data:set:stock', JSON.parse(body));
    	});
      	
    }).on('error',function(e){
      	events.emit('error:500',e);
    });
    
});
