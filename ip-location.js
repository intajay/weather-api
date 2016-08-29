var request = require('request');

var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
var url = 'http://ip-api.com/json/' + ip;

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