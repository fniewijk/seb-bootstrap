const http = require('http');
const SebApi = require('./sebApi.js');

const getNewLocationKey = function(query) {
  const options = {
      host: 'apidev.accuweather.com',
      path: '/locations/v1/search?q=' + query + '&apikey=hoArfRosT1215',
      method: 'GET'
  };

  return new SebApi.apiCall(options).then(function(data){
      return data[0].Key;
  });
}

const getNewWeather = function(query) {
  const options = {
      host: 'apidev.accuweather.com',
      path: '/currentconditions/v1/' + query + '.json?language=en&apikey=hoArfRosT1215',
      method: 'GET'
  };

  return new SebApi.apiCall(options).then(function(data){
      return data;
  });
}

module.exports = {
    getNewLocationKey: getNewLocationKey,
    getNewWeather: getNewWeather
};
