var express = require("express");
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post("/", function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 15),
        email: req.body.email

    });
    user.save(function (err, result) {
        if (err)
            return res.status(500).json({
                title: 'Error, error, horror, honor',
                error: err
            });
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

router.post('/signin', function (req, res, next) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err)
            return res.status(500).json({
                title: 'Error, error, horror, honor, user/signin',
                error: err
            });
        if (!user) {
            if (err)
                return res.status(401).json({
                    title: "Smth wrong login",
                    error: {
                        message: 'inv login credentials'
                    }
                });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: "Smth wrong login",
                error: {
                    message: 'inv login credentials'
                }
            });
        }
        var token = jwt.sign({
            user: user
        }, 'smthgscrt', {
            expiresIn: 7200
        });
        res.status(200).json({
            message: 'Scss logged in',
            token: token,
            userId: user._id
        });

    });
});

module.exports = router;