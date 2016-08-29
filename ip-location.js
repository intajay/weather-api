var request = require('request');
var url = 'http://ip-api.com/json';

module.exports = function(callback) {
    request({
        url: url,
        json: true
    }, function(error, response, body) {
        if (error) {
            callback();
        } else {
            callback(body);
        }
    });
}