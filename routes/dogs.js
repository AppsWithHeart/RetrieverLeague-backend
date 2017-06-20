/**
 * Created by uroszivaljevic on 6/20/17.
 */

var express = require('express');
var models = require('../models/');

var router = express.Router();

router.get('/', function (req, res, next) {
    models.Dog.findAll()
        .then(function (dogs) {
            res.json(dogs);
        })
        .catch(function (err) {
            res.status(500).json(err);
        })
});

module.exports = router;