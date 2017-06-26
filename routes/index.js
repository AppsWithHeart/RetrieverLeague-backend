
var express = require('express');
var router = express.Router();

//routes imports
var dogs = require('./dogs');
var leagues = require('./leagues');
var contests = require('./contests');

module.exports.createRoutes = function () {
  console.log('test');
  router.use('/dogs', dogs);
  router.use('/leagues', leagues);
  router.use('/contests', contests);
  return router;
};

