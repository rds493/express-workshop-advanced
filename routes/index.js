// Where you will connect your other routers
var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('using routing');
  next();
});

module.exports = router;
