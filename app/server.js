var http = require('http');
var express = require('express');
var path = require('path');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var logger = require('./util/logger');

/** CONFIGURE EXPRESS */
var app = express();
app.use(methodOverride());
app.use(bodyParser.json());
app.use(require('morgan')({ "stream": logger.stream }));
app.set('port', process.env.PORT || 3000);
app.use(require('./controllers'));

/** LISTEN */
http.createServer(app).listen(app.get('port'),
	function(){
		logger.info('express is listening on' + app.get('port'));
});



