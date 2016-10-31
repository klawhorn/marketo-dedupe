var chai = require('chai');
var expect = chai.expect;
var choose = require('../js/chooseValue.js');
var moment = require('moment');

describe('isBefore', function() {
  it('should return true when the first value preceded the second', function() {
    var moment_1 = moment('2015-05-07');
    var moment_2 = moment('2015-06-07');
    expect(choose.isBefore(moment_1, moment_2)).to.equal(true);
  });
});

describe('isBefore', function() {
  it('should return false when the first value is after the second', function() {
    var moment_1 = moment('2015-05-07');
    var moment_2 = moment('2015-06-07');
    expect(choose.isBefore(moment_2, moment_1)).to.equal(false);
  });
});

describe('isSame', function() {
  it('should return true when the first value is the same as the second', function() {
    var moment_1 = moment('2015-05-07');
    var moment_2 = moment('2015-05-07');
    expect(choose.isSame(moment_2, moment_1)).to.equal(true);
  });
});

describe('isSame', function() {
  it('should return false when the first value is not the same as the second', function() {
    var moment_1 = moment('2015-05-07');
    var moment_2 = moment('2016-05-07');
    expect(choose.isSame(moment_2, moment_1)).to.equal(false);
  });
});
