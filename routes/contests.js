/**
 * Created by uroszivaljevic on 6/26/17.
 */

var express = require('express');

var models = require('../models');

var router = express.Router();


router.get('/', function (req, res) {

    models.Contest.findAll({
        include: [
            {
                model: models.Dog,
                as: 'dogs',
                through: {
                    attributes: ['result']
                }
            }
        ]
    })
        .then(function (contests) {
            res.json(contests);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });

});

router.get('/:contestId', function (req, res) {
    models.Contest.findById(req.params.contestId, {
        attributes: ["name"],
        include: [
            {
                model: models.Dog,
                as: 'dogs',
                through: {
                    attributes: ['result']
                },
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
            }
        ]
    }).then(function (contest) {
        res.json(contest);
    }).catch(function (error) {
        res.status(500).json(error);
    })
});

router.get('/test/:contestId', function (req, res) {
    models.ContestDog.findAll({
        where: {
            contestId: req.params.contestId
        },
        attributes: ["result"],

    }).then(function (contests) {
        res.json(contests);
    }).catch(function (error) {
        res.status(500).json(error);
    })
});


router.get('/:contestId/league/:leagueId', function (req, res) {
    console.log(req.params.leagueId);
    models.Contest.findById(req.params.contestId, {
        include: [
            {
                model: models.Dog,
                as: 'dogs',
                require: false,
                where: {
                    leagueId: req.params.leagueId
                }
            }
        ]
    })
        .then(function (contests) {
            res.json(contests);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });

});

module.exports = router;