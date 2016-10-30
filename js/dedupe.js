var fs = require('fs');
var write = require('./writeFile.js');
var reorderID = require('./filter.js');
var chooseValue = require('./chooseValue.js');
var reset = require('./resetFormat.js');

module.exports = {
  //reads file passed to it, returns array of objects to filter
  deduplicate : function (file, callback) {
    fs.readFile(file, 'utf8', function(err, data) {
      var removedItems = {};
      removedItems.removedArray= [];
      //reads file
        var file_data = JSON.parse(data).leads;
      //reorders by id for filtering
        var idOrder = reorderID.reOrder(file_data, '_id', removedItems.removedArray);
      //reformats an array of unique id entries
        var filtered_by_id = reset.resetFormat(idOrder);
      //takes array of unique ids and reorders it by email
        var emailOrder = reorderID.reOrder(file_data, 'email', removedItems.removedArray);
      //reformats into an array of unique email entries
        var filtered_by_email = reset.resetFormat(emailOrder);
        console.log(removedItems.removedArray);

        callback('deduplicatedData.json', filtered_by_email);
      });
  }
}
