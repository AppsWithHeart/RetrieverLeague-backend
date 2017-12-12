/**
 * Created by uroszivaljevic on 6/20/17.
 */

var express = require('express');
var models = require('../models/');
var _ = require('lodash');

var router = express.Router();

router.get('/', function (req, res) {

    var whereQuery = {};
    if (req.query.leagueId) {
        whereQuery = {
            leagueId: req.query.leagueId,
        }
    }
    models.Dog.findAll({
        where: whereQuery,
        include: [
            {
                model: models.Contest,
                as: 'contests',
                through: {
                    model: models.DogContest,
                    attributes: ['result'],
                    as: 'dogContests'
                }
            }
        ],
        order: [
            ["createdAt", "DESC"]
        ]
    })
        .then(function (dogs) {
            res.json(dogs);
        })
        .catch(function (err) {
            res.status(500).json(err);
        })
});

router.get('/:dogId/tasks/:contestId', function (req, res) {
    models.Dog.findById(req.params.dogId, {
        include: [
            {
                model: models.Task,
                as: 'tasks',
                where: {
                    contestId: req.params.contestId,
                },
                through: {
                    model: models.DogTask,
                    attributes: ['score'],
                    as: 'dogTask'
                },
                required: false,
            }
        ]
    })
        .then(function (dog) {
            res.json(dog);
        })
        .catch(function (err) {
            res.status(500).json(err);
        })
});

router.get('/count/all', function (req, res) {

    models.Dog.count()
        .then(function(count) {
            res.json({count: count});
        })
        .catch(function (err) {
            res.status(500).json(err);
        })

});

router.post('/', function (req, res) {
    models.Dog.create({
        name: req.body.name,
        breed: req.body.breed,
        leagueId: req.body.leagueId,
        dateOfBirth: req.body.dateOfBirth,
        ownerName: req.body.ownerName
    })
        .then(function (dog) {
            res.json(dog);
        })
        .catch(function (err) {
            res.status(500).json(err);
        })
});

module.exports = router;