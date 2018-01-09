// Where you will connect your other routers
var express = require('express');
var router = express.Router();
var users = require('./users.js')

router.use('/', function (req, res, next) {
  console.log('going through the api now');
  next();
});

router.use('/users', users);

module.exports = router;
