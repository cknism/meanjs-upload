'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Article Schema
 */
var MoneyHistorySchema = new Schema({

});

mongoose.model('MoneyHistory', MoneyHistorySchema);
