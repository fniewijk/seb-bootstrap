//load the web rendering engine into node.js
var express = require('express');
var path = require('path');
//connect express to the handlebars rendering engine.
var exphbs = require('express-handlebars');
//create a new app
var app = express();

var aboutRoute = require('./src/routes/about/route');
var indexRoute = require('./src/routes/index/route');
var cheeseRoute = require('./src/routes/cheese/route');
var musicRoute = require('./src/routes/music/route');
var weatherRoute = require('./src/routes/weather/route');

app.use('/assets', express.static('assets'));

//set handlebars to be used as a rendering engine
app.engine('hbs', exphbs({
    extname:'hbs',
    defaultLayout:'main.hbs'
}));

app.set('view engine', 'hbs');

app.use('/index', indexRoute);
app.use('/about', aboutRoute);
app.use('/cheese', cheeseRoute);
app.use('/music', musicRoute);
app.use('/weather', weatherRoute);

//start the server.
app.listen(3000, function () {
   console.log("Example app listening on port 3000!", path.resolve() , __dirname);
});
