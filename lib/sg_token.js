/**
 * Token generator class
 * @class SgToken
 * @param {Object} [options={}] - Optional settings
 */
'use strict'

const uuid = require('uuid')
const abind = require('abind')

/** @lends SgToken */
class SgToken {
  constructor (options = {}) {
    let {
      stack = [],
      maxStackCount = 1000
    } = options
    const s = this
    s._stack = stack
    s._maxStackCount = maxStackCount
    abind(s)
  }

  /**
   * Generate a new token
   * @returns {string} - Generated token
   */
  generate () {
    let generated = uuid.v4().replace(/\-/g, '')
    const s = this
    s._stack = [ ...s._stack, generated ].slice(-1 * s._maxStackCount)
    return generated
  }

  /**
   * Get generated history
   * @returns {string[]}
   */
  history () {
    const s = this
    return [ ...s._stack ]
  }
}

module.exports = SgToken
