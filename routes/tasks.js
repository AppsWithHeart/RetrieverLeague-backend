/**
 * Created by uroszivaljevic on 8/8/17.
 */
/**
 * Created by uroszivaljevic on 6/20/17.
 */

var express = require('express');
var models = require('../models/');

var router = express.Router();

router.get('/:dogId/:contestId', function (req, res, next) {

    models.Dog.findById(req.params.dogId, {
        attributes: [],
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
                }
            }
        ]
    })
        .then(function (dog) {
            //return tasks only
            if (dog) {
                res.json(dog.tasks);
            } else {
                res.json([]);
            }
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json(err);
        })

});

router.get('/', function (req, res, next) {
    models.Task.findAll({
        where: {
            contestId: req.query.contestId,
        }
    })
        .then(function (tasks) {
            res.json(tasks);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
});

router.post('/dog', function (req, res, next) {
    models.DogTask.bulkCreate(req.body.tasks)
        .then(function (tasks) {
            models.ContestDog.create({
                contestId: req.body.contestId,
                result: req.body.result,
                dogId: req.body.dogId,
            })
                .then(function (contestDog) {
                    res.json(tasks);
                })
                .catch(function (error) {
                    res.status(500).json(error);
                });
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
});

module.exports = router;