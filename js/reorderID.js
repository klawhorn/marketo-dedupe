var format = require('./format.js');
var email = require('./reorderEmail.js');
var log = require('./logging.js');
var filter = require('./filter.js');

module.exports = {
  reOrderID: function (array) {
    function reorder (arr) {
      var id_reason = "MORE RECENT ENTRY WITH SAME ID IN DATABASE";
      var obj = filter.filterForDupes(arr, '_id', true);
      var filtered_by_id = format.formatArray(obj.output_data_id);
      obj.email=email.reOrderEmail(filtered_by_id, 'email');
      return obj;
    }
    return reorder(array);
  }
}
