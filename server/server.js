//install all module



var path = require('path');
var express = require('express');
var patha = path.join(__dirname,'../public');


//configuration

var app = express();
app.use(express.static(patha));


app.listen('3000',function(err){
	if(!err){
		console.log("connected");
	}
	else{
		console.log("there is an error");
	}
})