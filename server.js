//load the web rendering engine into node.js
var express = require('express');
//create a new app
var app = express();
//connect express to the handlebars rendering engine.
var exphbs = require('express-handlebars');

//var weatherApi = require('./weatherApi.js');

//set handlebars to be used as a rendering engine
app.engine('hbs', exphbs({
    extname:'hbs',
    defaultLayout:'main.hbs'
}));
app.set('view engine', 'hbs');

//whenever someone goes to the root, display this page.
app.get('/', function (req, res) {
    //render the index.hbs into the main.hbs.
   res.render('index',{ 'title': 'I am rendered into the template'});
});

// // //TODO finish the weather app.
// app.get('/weather', function (req, res) {
// //     //TODO do an AJAX request.
// //     //Use the 'http' module.
//       weatherApi.getWeather('London').then(function(data){
//         //render here
//         res.render('weather',{ 'data': data });
//       });
// });

//
//     //render the weather data in the weather.hbs template.
//    res.render('weather',{ 'data': {
//        'todo': 'data from the server'
//    }});
// });

//app.get('/weather', 'weather.js');

//start the server.
var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
