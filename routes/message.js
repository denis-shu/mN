var express = require("express");
var router = express.Router();
var jwt = require('jsonwebtoken');
var Message = require('../models/message');
var User = require('../models/user');


router.get('/', function (req, res, next) {
    Message.find()
    .populate('user', 'firstName')
    .exec(function (err, messages) {
        if (err) {
            return res.status(500).json({
                title: 'Error while getting msg',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: messages
        });
    });
});

router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'smthgscrt', function (err, decoded) {
        if (err)
            return res.status(401).json({
                title: 'Not Auth',
                error: err
            });
        next();
    });
});

router.post("/", function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function (err, user) {
        if (err)
            return res.status(500).json({
                title: 'Error while saving msg',
                error: err
            });

        var message = new Message({
            content: req.body.content,
            user: user._id
        });

        message.save(function (err, result) {
            if (err)
                return res.status(500).json({
                    title: 'Error while saving msg',
                    error: err
                });
            user.messages.push(result);
            user.save();
            res.status(201).json({
                message: 'Saved message',
                object: result
            });
        });
    });
});

router.patch('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);

    Message.findById(req.params.id, function (err, message) {
        if (err)
            return res.status(500).json({
                title: 'Error while saving msg',
                error: err
            });
        if (!message)
            return res.status(500).json({
                title: 'No msg',
                error: {
                    message: "No mesgs.. found"
                }
            });
        if (message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Auth',
                error: {message: 'U not math'}
            });
        }
        message.content = req.body.content;
        message.save(function (err, result) {
            if (err)
                return res.status(500).json({
                    title: 'Error while saving msg',
                    error: err
                });
            res.status(200).json({
                message: 'Updated message',
                object: result
            })

            ;
        });
    });
});

router.delete('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);

    Message.findById(req.params.id, function (err, message) {
        if (err)
            return res.status(500).json({
                title: 'Error while saving msg',
                error: err
            });
        if (!message)
            return res.status(500).json({
                title: 'No msg',
                error: {
                    message: "No mesgs.. found"
                }
            });
        if (message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Auth',
                error: {message: 'U not math'}
            });
        }

        message.remove(function (err, result) {
            if (err)
                return res.status(500).json({
                    title: 'Error while saving msg',
                    error: err
                });
            res.status(200).json({
                message: 'Deleted message',
                object: result
            })

            ;
        });
    });
});

module.exports = router;