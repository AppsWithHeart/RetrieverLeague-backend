var express = require('express');
var router = express.Router();

//routes imports
var dogs = require('./dogs');
var leagues = require('./leagues');
var contests = require('./contests');
var mail = require('./mail');
var tasks = require('./tasks');
var contactMessages = require('./contactMessages');

module.exports.createRoutes = function () {
    console.log('test');
    router.use('/dogs', dogs);
    router.use('/leagues', leagues);
    router.use('/contests', contests);
    router.use('/mail', mail);
    router.use('/tasks', tasks);
    router.use('/contactMessages', contactMessages);
    return router;
};

