var weatherApi = require('../../api/weatherApi.js');
const express = require('express');

const app = express();

app.get('/', function (req, res) {

  if(req.query.weatherSearch) {
    weatherApi.getLocationKey(req.query.weatherSearch.replace(/\s+/g, '')).then(function(key){
      weatherApi.getWeather(key).then(function(data){
        res.render('weather', {'title': 'Seb loves the weather', 'location': req.query.weatherSearch, 'data': data});
        }, function(error){
          console.log('get weather', error);
          res.render('weather',{ 'location': 'Could not get weather' });
        });
    }, function(error){
      console.log('get location key weather', error);
      res.render('weather',{ 'location': 'Cannot find location' });
    });
  }
  else {
    res.render('weather', {
      'title': 'Seb loves the weather'
    });
  }
});

module.exports = app;
