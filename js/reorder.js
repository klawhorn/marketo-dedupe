var choose = require('./chooseValue.js');
var reset = require('./resetFormat.js');
var email = require('./reorderEmail');

module.exports = {
  reOrder: function (array) {
    // console.log(' ========= ID in filter, array that is passed: ');
    function reorder (arr) {
      //create an empty object for what we will keep
      var obj = {
        'output_data_id' : {},
        'duplicate_data' : {}
      };

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
            if (obj.duplicate_data[entry._id]) {
              //pop the existing out of output_data and push it into duplicate_data
              obj.duplicate_data[entry._id].push(obj.output_data_id[entry._id].pop());
              obj.output_data_id[entry._id].push(entry);
            } else {
              //otherwise create the prop array to store future similar entries
              obj.duplicate_data[entry._id] = [];
              //pop the existing out of output_data and push it into duplicate_data
              obj.duplicate_data[entry._id].push(obj.output_data_id[entry._id].pop());
              obj.output_data_id[entry._id].push(entry);
            }
          } else {
            obj.duplicate_data[entry._id].push(entry);
            return;
          }
        }
      });
      var filtered_by_id = reset.resetFormat(obj.output_data_id);
      obj.email=email.reOrderEmail(filtered_by_id, 'email', obj.output_data_email, obj.duplicate_data);
      return obj;
    }
    return reorder(array);
  }
}
