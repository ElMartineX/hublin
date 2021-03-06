'use strict';

var mongoose = require('mongoose');

var HostSchema = new mongoose.Schema({
  _id: false,
  url: {type: String},
  type: {type: String, required: true},
  username: {type: String},
  password: {type: String}
});

module.exports = HostSchema;
