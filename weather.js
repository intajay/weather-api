var request = require('request');

module.exports = function(location, callback) {
    if (!location.lat || !location.lon) {
        return callback('No location detected!');
    } else {
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + location.lat + '&lon=' + location.lon + '&APPID=afc42b23b09adb2ce87e9e67113b3d32';
        request({
            url: url,
            json: true
        }, function(error, response, body) {
            if (error) {
                callback('Unable to fatch Weather data!');
            } else {
                var weather_data = {};
                weather_data.location = location;
                weather_data.weather = body;
                callback(weather_data);
            }
        });
    }
}