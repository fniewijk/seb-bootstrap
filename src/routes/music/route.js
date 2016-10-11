const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.render('music', {
    title: 'Seb loves music'
  });
});

module.exports = app;
