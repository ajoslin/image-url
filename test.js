'use strict'

var test = require('tape')
var imageUrl = require('./')

test(function (t) {
  t.equal(imageUrl('foo'), 'url("foo")')
  t.end()
})
