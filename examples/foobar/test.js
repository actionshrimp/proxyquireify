'use strict';

var proxyquire = require('proxyquireify')(require);
var jquery = require('jquery');

var stubs = { 
  './bar': { 
      wunder: function () { return 'wirklich wunderbar'; }
    , kinder: function () { return 'schokolade'; }
  }
};

var foo = proxyquire('./src/foo', stubs);
console.log(foo());
