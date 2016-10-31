var choose = require('./chooseValue.js');
var log = require('./logging.js');
var filter = require('./filter.js');

module.exports = {
  reOrderEmail: function (array, property) {
    function reorder (arr) {
      var obj = filter.filterForDupes(arr, 'email', false);
      return obj;
      }
      return reorder(array);
    }
}
