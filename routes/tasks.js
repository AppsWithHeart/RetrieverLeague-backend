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

    models.Task.findAll({
        where: {
            dogId: req.params.dogId,
            contestId: req.params.contestId,
        }
    })
        .then(function (tasks) {
            res.json(tasks);
        })
        .catch(function (err) {
            res.status(500).json(err);
        })

});

module.exports = router;