var fs = require('fs');
var write = require('./writeFile.js');
var reorderID = require('./reorder.js');
var chooseValue = require('./chooseValue.js');
var reset = require('./resetFormat.js');

module.exports = {
  //reads file passed to it, returns array of objects to filter
  deduplicate : function (file, callback) {
    fs.readFile(file, 'utf8', function(err, data) {

      //reads file
        var file_data = JSON.parse(data).leads;
      //reorders by id for filtering
        var data_object = reorderID.reOrder(file_data);
        var ordered_by_both = data_object.email.output_data_email;
        var filtered_by_both = reset.resetFormat(ordered_by_both);
        var removed_in_id = data_object.duplicate_data;
        console.log(removed_in_id);
        var removed_in_email = data_object.email.duplicate_data;
        console.log(removed_in_email);


        callback('deduplicatedData.json', filtered_by_both);
        // callback('removedData.json', filtered_by_id);
      });
  }
}
