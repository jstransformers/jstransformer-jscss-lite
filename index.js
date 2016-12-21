'use strict'

var jscssLite = require('jscss-lite')

exports.name = 'jscss-lite'
exports.inputFormats = ['jscss-lite', 'jscss', 'css', 'js']
exports.outputFormat = 'html'

exports.render = function (str) {
  return jscssLite(str)
}
