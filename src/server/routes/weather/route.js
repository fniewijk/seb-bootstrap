var weatherApi = require('../../api/weatherApi.js');
const express = require('express');

const app = express();

app.get('/', function (req, res) {

  if(req.query.weatherSearch) {
    weatherApi.getLocationKey(req.query.weatherSearch).then(function(key){
      weatherApi.getWeather(key).then(function(data){
        res.render('weather', {'title': 'Seb loves the weather', 'location': req.query.weatherSearch, 'data': data});
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
      'title': 'Seb loves the weather'
    });
  }
});

module.exports = app;
