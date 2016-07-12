var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Post = require('./posts/Post.js');
var Comment = require('./comments/Comment.js');
var app = express();


var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/mvp'
//connect to mongo db named 'mvp'
mongoose.connect(mongoURI);

//configure server with middleware and routing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../'));



var port = process.env.PORT || 1337;

//start listening to requests on port 1337
app.listen(port);

console.log('Server now listening on port: ' + port);


app.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
    if(err){ return next(err); }
    res.json(posts);
  });
});


app.post('/posts', function(req, res, next) {
  console.log(req.body);
  var post = new Post(req.body);

  post.save(function(err, post){
    if (err){return next (err); }

    console.log(post);
    res.json(post);
  });
});



//export app
module.exports = app;



