const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.render('index', {
    data: 'data'
  });
}
);

module.exports = app;
