XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var create_function = require('/Users/kvz/code/phpjs/src/php/funchand/create_function.js')

describe('php.funchand.create_function.js', function () {
  it('should pass example 1', function (done) {
    f = create_function('a, b', "return (a + b);");
    f(1, 2);
    var expected = 3
f = create_function('a, b', "return (a + b);");
    var result = f(1, 2);
    expect(result).to.deep.equal(expected)
    done()
  })
})