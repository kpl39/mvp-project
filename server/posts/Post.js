var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: {type: String, default: 'test'},
  body:  {type: String, default: 'test1'},
  upvotes: {type: Number, default: 0},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Post', PostSchema)
