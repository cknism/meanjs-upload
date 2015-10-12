'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
    fs = require('fs'),
    path = require('path'),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

exports.historyList = function(){};
exports.historyRead = function(){};
exports.historyUpdate = function(){};
exports.historyDelete = function(){};
exports.historyByID = function(){};

exports.historyCreate = function (req, res) {
    console.log('exports.historyCreate');
    var user = req.user;

    if (user) {
        fs.writeFile('./modules/money/client/data/' + req.files.file.name, req.files.file.buffer, function (uploadError) {
            if (uploadError) {
                return res.status(400).send({
                    message: 'Error occurred while uploading profile picture'
                });
            } else {
                res.json({
                    result: true
                });
            }
        });
    } else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
};
