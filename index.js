'use strict';

var jscssLite = require('jscss-lite');

exports.name = 'jscss-lite';
exports.inputFormats = ['jscss-lite', 'jscss', 'css', 'js'];
exports.outputFormat = 'html';

exports.render = function (str, options) {
  return jscssLite(str);
};
