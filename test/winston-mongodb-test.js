/*
 * mongodb-test.js: Tests for instances of the MongoDB transport
 *
 * (C) 2011 Charlie Robbins, Kendrick Taylor
 * MIT LICENSE
 *
 */

var path = require('path'),
    vows = require('vows'),
    assert = require('assert'),
    winston = require('winston'),
    helpers = require('winston/test/helpers'),
    transport = require('winston/test/transports/transport'),
    MongoDB = require('../lib/winston-mongodb').MongoDB;

var config = helpers.loadConfig(__dirname);

vows.describe('winston-mongodb').addBatch({
  "An instance of the MongoDB Transport":
    transport(MongoDB, config.transports.mongodb)
}).export(module);
