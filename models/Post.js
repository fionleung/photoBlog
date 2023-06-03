const mongoose = require('mongoose');


const photoSchema = new mongoose.Schema({
  url: String,
  ratio:Number
});

const postsSchema = new mongoose.Schema({
  title: String,
  content:String,
  urls:[photoSchema],
  createDate:Date
});

module.exports=mongoose.model('posts', postsSchema);
