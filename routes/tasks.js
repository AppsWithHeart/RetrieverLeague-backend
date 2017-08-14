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
        .then(function (dog) {
            //return tasks only
            res.json(dog.tasks);
        })
        .catch(function (err) {
            res.status(500).json(err);
        })

});

module.exports = router;