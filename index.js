//jshint esversion:6
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASS+"@cluster0.975zw.mongodb.net/postDB", {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes/postRoutes')(app);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
  const path = require('path');

app.get("*",function(req,res){
res.sendFile(path.resolve('client', 'build', 'index.html'))
});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)

});
