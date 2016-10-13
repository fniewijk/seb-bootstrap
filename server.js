//load the web rendering engine into node.js
var express = require('express');

//connect express to the handlebars rendering engine.
var exphbs = require('express-handlebars');

//create a new app
var app = express();

//reference routes for each page
var aboutRoute = require('./src/server/routes/about/route');
var indexRoute = require('./src/server/routes/index/route');
var cheeseRoute = require('./src/server/routes/cheese/route');
var musicRoute = require('./src/server/routes/music/route');
var weatherRoute = require('./src/server/routes/weather/route');

//use assets folder to store static files
app.use('/assets', express.static('assets'));

//set handlebars to be used as a rendering engine
app.engine('hbs', exphbs({
    extname:'hbs',
    defaultLayout:'main.hbs'
}));

//use handlebars as the default view engine
app.set('view engine', 'hbs');

//set paths for each page and handles app.get requests
app.use('/index', indexRoute);
app.use('/about', aboutRoute);
app.use('/cheese', cheeseRoute);
app.use('/music', musicRoute);
app.use('/weather', weatherRoute);

//start the server.
app.listen(3000, function () {
   console.log("Server is running on port 3000!");
});
