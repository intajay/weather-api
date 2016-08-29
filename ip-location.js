var request = require('request');

module.exports = function(ip, callback) {
    request({
        url: 'http://ip-api.com/json/' + ip,
        json: true
    }, function(error, response, body) {
        if (error) {
            callback();
        } else {
            callback(body);
        }
    });
}