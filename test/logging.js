var chai = require('chai');
var expect = chai.expect;
var logging = require('../js/logging.js');

describe('appendReason', function() {
  it('should add the property "reasonForRemoval" with value of given string to given object:', function() {
    var obj = {};
    var string = "string";
    var testing = logging.appendReason(obj, string);
    expect(typeof testing).to.equal('object');
    expect(Object.keys(testing).length > 0).to.equal(true);
  });
});
