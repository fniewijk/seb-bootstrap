const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.render('about', {
    title: 'About Seb'
  });
});

module.exports = app;
