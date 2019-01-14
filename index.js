'use strict'

const jscssLite = require('jscss-lite')

exports.name = 'jscss-lite'
exports.inputFormats = ['jscss-lite', 'jscss']
exports.outputFormat = 'html'

exports.render = function (str) {
  return jscssLite(str)
}

exports.renderAsync = function (str) {
  return new Promise((resolve, reject) => {
    let output = ''
    try {
      output = jscssLite(str)
    } catch (error) {
      return reject(error)
    }

    resolve(output)
  })
}
