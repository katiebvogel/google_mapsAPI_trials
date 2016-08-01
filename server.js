var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var methodOverride = require('method-override');
// var routes = require('./routes/routes.js')(app);
var app = express();

mongoose.connect("mongodb://localhost/MeanMapApp");


app.use(bodyParser.json());
app.use(express.static('public'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

//Routes
// app.use('./routes/routes.js');
require('./routes/routes.js')(app);


//server listen

app.listen(port);
console.log('App listening on port ' + port);
