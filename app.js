var express = require('express');
var app = express();
var chalk = require('chalk');
var volleyball = require('volleyball');
var bodyparser = require('body-parser');
var index = require('./routes/index.js');
// var routes = require('./routes'); uncomment this when you are ready to connect your router

app.use('/', volleyball);
app.use('/', bodyparser.json());


app.use('/', index);

app.get('/', function (req, res, next) {
  res.send('Root Route');
});

var PORT = 8000;

app.listen(PORT, function () {
  console.log(chalk.blue('server listening on port: ') + chalk.magenta(PORT));
});
