var choose = require('./chooseValue.js');
var format = require('./format.js');
var email = require('./reorderEmail.js');
var log = require('./loggingRemovals.js');

module.exports = {
  reOrder: function (array) {
    // console.log(' ========= ID in filter, array that is passed: ');
    function reorder (arr) {
      //create an empty object for what we will keep
      var obj = {
        'output_data_id' : {},
        'duplicate_id_data' : {}
      };
      var id_reason = "MORE RECENT ENTRY WITH SAME ID IN DATABASE";
      //big array of data objects, for each source object
      arr.forEach(function (entry) {
        // console.log('===== in for each')
        //if the new object doesn't already have a property with the id, put it in there
        if (!obj.output_data_id[entry._id]) {
          obj.output_data_id[entry._id] = [];
          obj.output_data_id[entry._id].push(entry);
        } else {
          //if it's already there, look at the existing one's date and the current one's date.
          var existing = obj.output_data_id[entry._id][0].entryDate;
          var current= entry.entryDate;
          //if the entry date are the same, current is lower on the list than existing, so pop out the existing entry and push the current one in.
          if (choose.isSame(existing, current) || choose.isBefore(existing, current)) {
            //if there is already a._idin duplicate data for the entry, push it in to store it
            if (obj.duplicate_id_data[entry._id]) {
              //pop the existing out of output_data and push it into duplicate_id_data
              log.appendReason(obj.output_data_id[entry._id][0], id_reason);
              obj.duplicate_id_data[entry._id].push(obj.output_data_id[entry._id].pop());
              obj.output_data_id[entry._id].push(entry);
            } else {
              //otherwise create the prop array to store future similar entries
              obj.duplicate_id_data[entry._id] = [];
              //pop the existing out of output_data and push it into duplicate_id_data
              log.appendReason(obj.output_data_id[entry._id][0], id_reason);
              obj.duplicate_id_data[entry._id].push(obj.output_data_id[entry._id].pop());
              obj.output_data_id[entry._id].push(entry);
            }
          } else {
            log.appendReason(entry, id_reason);
            obj.duplicate_id_data[entry._id].push(entry);
            return;
          }
        }
      });
      var filtered_by_id = format.formatArray(obj.output_data_id);
      obj.email=email.reOrderEmail(filtered_by_id, 'email');
      return obj;
    }
    return reorder(array);
  }
}
