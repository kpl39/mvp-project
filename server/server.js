var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();


var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/mvp'
//connect to mongo db named 'mvp'
mongoose.connect(mongoURI);

//configure server with middleware and routing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../../client'));


var port = process.env.PORT || 1337;

//start listening to requests on port 1337
app.listen(port);

console.log('Server now listening on port: ' + port);

//export app
module.exports = app;



