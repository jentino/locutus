XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var chr = require('/Users/kvz/code/phpjs/src/php/strings/chr.js')

describe('php.strings.chr.js', function () {
  it('should pass example 1', function (done) {
    chr(75) === 'K';
    chr(65536) === '\uD800\uDC00';
    var expected = true
true
chr(75) === 'K';
    var result = chr(65536) === '\uD800\uDC00';
    expect(result).to.deep.equal(expected)
    done()
  })
})