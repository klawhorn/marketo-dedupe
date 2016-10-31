var chai = require('chai');
var expect = chai.expect;
var format = require('../js/format.js');

describe('formatArray', function() {
  it('should return an array', function() {
    var obj = {
      '_id' : ['98719237198371'],
      'email' : ["yes@no.maybe"],
      'address': ['here']
    };
    var returned = format.formatArray(obj);
    expect(typeof returned).to.equal('object');
  });
});

describe('leadsProp', function() {
  it('should return a string', function() {
    var arr = ['1', '2', '3'];
    var returned = format.leadsProp(arr);
    expect(typeof returned).to.equal('string');
  });
});

describe('formatRemovals', function() {
  it('should return an array', function() {
    var obj = {
      '_id' : ['98719237198371'],
      'email' : ["yes@no.maybe"],
      'address': ['here']
    };
    var returned = format.formatArray(obj);
    expect(typeof returned).to.equal('object');
  });
});
