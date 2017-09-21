/**
 * Created by uroszivaljevic on 9/21/17.
 */

var express = require("express");
var models = require('../models');

var router = express.Router();

router.post("/", function(req, res, next) {
    models.ContactMessage.create({
        email: req.body.email,
        message: req.body.message,
    })
        .then(function(message) {
            res.json(message);
        })
        .catch(function (err) {
            res.status(500).json(err);
        })
});

module.exports = router;