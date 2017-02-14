/**
 * Create a SgToken instance
 * @function create
 */
'use strict'

const SgToken = require('./sg_token')

/** @lends create */
function create (...args) {
  return new SgToken(...args)
}

module.exports = create
