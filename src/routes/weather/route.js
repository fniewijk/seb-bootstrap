var weatherApi = require('../../api/weatherApi.js');
const express = require('express');

const app = express();

app.get('/', function (req, res) {
  weatherApi.getNewLocationKey('Bali').then(function(key){
    weatherApi.getNewWeather(key).then(function(data){
      res.render('weather', {'data': data});
      }, function(error){
        console.log('get weather', error);
        res.render('weather',{ 'data': 'something went wrong' });
      });
  }, function(error){
    console.log('get location key weather', error);
    res.render('weather',{ 'data': 'something went wrong' });
  });
});

module.exports = app;
