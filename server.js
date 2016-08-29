var express = require('express');
var cors = require('cors');
var app = express();

var weather = require('./weather.js');
var location = require('./ip-location.js');

var server_port = process.env.PORT || 8080;

app.use(cors());

app.get('/', function(req, res) {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log(ip);

	location(ip, function(location) {
		if (!location) {
			res.json('Unable to locate');
			return;
		}
		weather(location, function(currentWeather) {
			res.json(currentWeather);
			console.log(currentWeather);
		});
	});
});

app.listen(server_port, function() {
	console.log("Listening on port " + server_port);
});