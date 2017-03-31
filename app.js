const PORT = 3000;

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.render('');
});

app.listen(PORT, function(){
   console.log(`App running on port ${PORT}`) 
});