'use strict';
/*jshint asi: true */

var test             =  require('tape')
  , fs               =  require('fs')
  , findDependencies =  require('../lib/find-dependencies')

test('multiple proxyquires with different names', function (t) {
  var src = fs.readFileSync(require.resolve('./fixtures/dependencies'), 'utf-8');
  var deps = findDependencies(src)
  t.deepEqual(deps, [ './depuno', './foober', './foo' ], 'returns array with each proxyquired dep exactly once')
  t.end()
})

test('one proxyquire in actual test', function (t) {
  var src = fs.readFileSync(require.resolve('./clientside/independent-overrides'), 'utf-8');
  var deps = findDependencies(src)
  t.deepEqual(deps, ['../fixtures/foo'], 'finds dependency')
  t.end()
})
