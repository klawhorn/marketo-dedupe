var format = require('./format.js');
var filter = require('./filter.js');

module.exports = {
  reOrderID: function (array) {
      var obj = filter.filterForDupes(array, '_id', true);
      var filtered_by_id = format.formatArray(obj.output_data_id);
      obj.email=filter.filterForDupes(filtered_by_id, 'email', false);
      return obj;
  }
}
