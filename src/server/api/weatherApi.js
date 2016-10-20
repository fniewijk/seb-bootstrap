const http = require('http');
const api = require('./apiHttpRequest.js');

const getLocationKey = function(query) {
  const options = {
      host: 'apidev.accuweather.com',
      path: '/locations/v1/search?q=' + query + '&apikey=hoArfRosT1215',
      method: 'GET'
  };

  return new api.apiCall(options).then(function(data){
      return data[0].Key;
  });
}

const getWeather = function(query) {
  const options = {
      host: 'apidev.accuweather.com',
      path: '/currentconditions/v1/' + query + '.json?language=en&apikey=hoArfRosT1215',
      method: 'GET'
  };

  return new api.apiCall(options);
}

module.exports = {
    getLocationKey: getLocationKey,
    getWeather: getWeather
};
