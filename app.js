var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hola macris');
});

app.listen(3000, function(){
	console.log('Hola macrina!');
});