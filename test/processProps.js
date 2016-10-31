var chai = require('chai');
var expect = chai.expect;
var format = require('../js/format.js');
var filter = require('../js/filter.js');
var processProps = require('../js/processProps.js');

describe('evaluate', function() {
  it('should return an object', function() {
    var arr = [
    {
    "_id": "jkj238238jdsnfsj23",
    "email": "foo@bar.com",
    "firstName":  "John",
    "lastName": "Smith",
    "address": "123 Street St",
    "entryDate": "2014-05-07T17:30:20+00:00"
    },
    {
    "_id": "edu45238jdsnfsj23",
    "email": "mae@bar.com",
    "firstName":  "Ted",
    "lastName": "Masters",
    "address": "44 North Hampton St",
    "entryDate": "2014-05-07T17:31:20+00:00"
    },
    {
    "_id": "wabaj238238jdsnfsj23",
    "email": "bog@bar.com",
    "firstName":  "Fran",
    "lastName": "Jones",
    "address": "8803 Dark St",
    "entryDate": "2014-05-07T17:31:20+00:00"
    }];
    var returned = processProps.evaluate(arr);
    expect(typeof returned).to.equal('object');
  });
});
