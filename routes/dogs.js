/**
 * Created by uroszivaljevic on 6/20/17.
 */

var express = require('express');
var models = require('../models/');
var _ = require('lodash');

var router = express.Router();

router.get('/', function (req, res) {
    models.Dog.findAll({
        include: [
            {
                model: models.Task,
                as: 'tasks',
                through: {
                    model: models.DogTask,
                    attributes: ['score'],
                    as: 'dogTask'
                }
            }
        ]
    })
        .then(function (dogs) {
            res.json(dogs);
        })
        .catch(function (err) {
            res.status(500).json(err);
        })
});

router.get('/count', function (req, res) {

    models.Dog.count()
        .then(function(count) {
            res.json(count);
        })
        .catch(function (err) {
            res.status(500).json(err);
        })

});

module.exports = router;