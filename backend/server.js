const path = require('path');
const express = require('express');
require('dotenv').config()

// CREATE EXPRESS APP

const app = express();

console.log('request?');

//  APP.USE IS FOR USING MIDDLEWARE

app.use(express.static(path.join(__dirname, 'public')));

// ADD MORE MIDDLEWARE 

app.use(function(req, res, next){
  res.status(404);
  res.send('404 File Found not');
});

//  SET PORT PREFERENCE WITH DEFAULT

const PORT = process.env.PORT || 8080;

// START SERVER

app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`);
});