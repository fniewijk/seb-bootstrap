var cheeseApi = require('../../api/cheeseApi.js');
const express = require('express');

const app = express();

app.get('/', function (req, res) {
  cheeseApi.getCheese().then(function(data) {
    res.render('cheese', { title: 'Seb loves cheese', 'data': data });
  });
});

module.exports = app;
