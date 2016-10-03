const http = require('http');

const getWeather = function(query) {
    return new Promise((resolve, reject) => {

        const options = {
            host: 'http://localhost:3000',
            path: '/api.openweathermap.org/data/2.5/weather?q=' + query,
            method: 'GET'
        };

        let httpReq = http.get(options, (httpRes) => {
            // Buffer the body entirely for processing as a whole.
            let bodyChunks = [];
            httpRes.on('data', (chunk) => {
                // You can process streamed parts here...
                bodyChunks.push(chunk);
            }).on('end', function() {
                let body = Buffer.concat(bodyChunks);
                //TODO add some stuff here to make it more robust
                resolve(JSON.parse(body));
            });
        });

        httpReq.on('error', (err) => {
            reject(err);
        });

        httpReq.end();
    });
};

module.exports = {
    getWeather: getWeather
};
