/**
 * Test case for sgToken.
 * Runs with mocha.
 */
'use strict'

const SgToken = require('../lib/sg_token.js')
const assert = require('assert')
const co = require('co')

describe('sg-token', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sg token', () => co(function * () {
    let token = new SgToken({
      maxStackCount: 3
    })
    assert.ok(token.generate())
    assert.ok(token.generate())
    assert.equal(token.history().length, 2)
    assert.ok(token.generate())
    assert.ok(token.generate())
    assert.equal(token.history().length, 3)
  }))
})

/* global describe, before, after, it */
