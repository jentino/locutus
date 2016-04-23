XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var setcookie = require('/Users/kvz/code/phpjs/src/php/network/setcookie.js')

describe('php.network.setcookie.js', function () {
  it('should pass example 1', function (done) {
    setcookie('author_name', 'Kevin van Zonneveld');
    var expected = true
    var result = setcookie('author_name', 'Kevin van Zonneveld');
    expect(result).to.deep.equal(expected)
    done()
  })
})