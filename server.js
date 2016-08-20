var express = require('express'),
	handler = require('./lib/handler'),
	setHeaders = require('./lib/setHeaders'),
	DEFAULT_PORT = 8008,
	port = process.env.PORT || DEFAULT_PORT;

var app = express();

app.use(setHeaders);
app.get('/', handler);

app.listen(port, function () {
	console.log("Server is running on http://localhost:" + port);
});