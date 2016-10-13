var weatherApi = require('../../api/weatherApi.js');
const express = require('express');

const app = express();

app.get('/', function (req, res) {

  if(req.query.weatherSearch) {
    weatherApi.getNewLocationKey(req.query.weatherSearch).then(function(key){
      weatherApi.getNewWeather(key).then(function(data){
        res.render('weather', {'location': 'The weather in ' + req.query.weatherSearch + ' is:', 'data': data});
        }, function(error){
          console.log('get weather', error);
          res.render('weather',{ 'data': 'something went wrong' });
        });
    }, function(error){
      console.log('get location key weather', error);
      res.render('weather',{ 'data': 'something went wrong' });
    });
  }
  else {
    res.render('weather', {
      title: 'Search the weather'
    });
  }
});

module.exports = app;
