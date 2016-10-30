var fs = require('fs');
var write = require('./writeFile.js');
var reorderID = require('./filter.js');
var chooseValue = require('./chooseValue.js');
var reset = require('./resetFormat.js');

module.exports = {
  //reads file passed to it, returns array of objects to filter
  deduplicate : function (file, callback) {
    fs.readFile(file, 'utf8', function(err, data) {
      duplicate_array= [];
      //reads file
        var file_data = JSON.parse(data).leads;
      //reorders by id for filtering
        var ordered_id_object = reorderID.reOrder(file_data, '_id');
        console.log(ordered_id_object);
        //reformats an array of unique id entries
        var ordered_id_output = ordered_id_object.output_data;
        var filtered_by_id = reset.resetFormat(ordered_id_output);
      //takes array of unique ids and reorders it by email
        var ordered_email_object = reorderID.reOrder(file_data, 'email');
        console.log(ordered_email_object);
        var ordered_email_output = ordered_email_object.output_data;
      //reformats into an array of unique email entries
        var filtered_by_email = reset.resetFormat(ordered_email_output);

        callback('deduplicatedData.json', filtered_by_email);
      });
  }
}
