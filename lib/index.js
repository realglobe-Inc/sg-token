/**
 * Token generator
 * @module sg-token
 */

'use strict'

const create = require('./create')
const SgToken = require('./')

let lib = create.bind(this)

Object.assign(lib, SgToken, {
  create,
  SgToken
})

module.exports = lib
