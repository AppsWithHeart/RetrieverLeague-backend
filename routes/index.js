
var express = require('express');
var router = express.Router();

//routes imports
var dogs = require('./dogs');
var leagues = require('./leagues');

module.exports.createRoutes = function () {
  console.log('test');
  router.use('/dogs', dogs);
  router.use('/leagues', leagues);
  return router;
};

