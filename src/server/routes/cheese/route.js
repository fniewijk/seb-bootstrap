const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.render('cheese', {
    title: 'Seb loves cheese'
  });
});

module.exports = app;
