'use-strict'

var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')

var app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.get('/',function(req,res){
	res.send("hi!!")
})

app.listen(port)
console.log('listening at port ' + port);