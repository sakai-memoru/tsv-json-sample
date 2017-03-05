"use strict"
var fs = require('fs');
var CSON = require('cson');
var _ = require('lodash');

let columndef = {};
let cols = {};

cols = CSON.parse(fs.readFileSync('./config/columndef.cson'));
_.assign(columndef,cols);

module.exports.columndef = columndef;

// debug -------------------------------
// -------------------------------------
console.log(columndef);
