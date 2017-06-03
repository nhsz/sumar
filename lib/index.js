'use strict'

const isNumber = require('es6-number')

module.exports = (arr) => {
  if (!arr.every(value => isNumber(value))) {
    throw new Error('Only numeric values are allowed')
  } else {
    return arr.reduce((a, x) => a + x, 0)
  }
}
