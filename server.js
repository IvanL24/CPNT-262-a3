const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config()

// CREATE EXPRESS APP
app.use(express.static(path.join(__dirname, 'frontend')));



//  APP.USE IS FOR USING MIDDLEWARE


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