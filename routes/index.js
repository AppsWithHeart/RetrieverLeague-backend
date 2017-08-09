
var express = require('express');
var router = express.Router();

//routes imports
var dogs = require('./dogs');
var leagues = require('./leagues');
var contests = require('./contests');
var tasks = require('./tasks');

module.exports.createRoutes = function () {
  console.log('test');
  router.use('/dogs', dogs);
  router.use('/leagues', leagues);
  router.use('/contests', contests);
    router.use('/tasks', tasks);
  return router;
};

