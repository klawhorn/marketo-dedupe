var chai = require('chai');
var expect = chai.expect;
var filter = require('../js/filter.js');

describe('filterForDupes', function() {
  it('should return an object', function() {
    var arr = [{
      '_id' : '98719237198371',
      'email' : "yes@no.maybe",
      'address': 'here'
    },{
      '_id' : '287598478947',
      'email' : "how@now.cow",
      'address': 'there'
    }];
    var returned = filter.filterForDupes(arr, '_id', true);
    expect(typeof returned).to.equal('object');
  });
});

describe('filterForDupes', function() {
  it('should return an object', function() {
    var arr = [{
      '_id' : '98719237198371',
      'email' : "yes@no.maybe",
      'address': 'here'
    },{
      '_id' : '287598478947',
      'email' : "how@now.cow",
      'address': 'there'
    }];
    var returned = filter.filterForDupes(arr, '_id', true);
    expect(Object.keys(returned)).to.have.length.above(0);
  });
});
