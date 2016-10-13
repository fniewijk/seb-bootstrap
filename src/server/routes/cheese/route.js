const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.render('cheese', {
    title: 'Seb loves cheese'
  });
}
);

// renderPage('cheese', [
//   {
//     type: 'Edam',
//     taste: 'Delicious'
//   },
//   {
//     type: 'Cheddar',
//     taste: 'Delicious'
//   }
// ]);

module.exports = app;
