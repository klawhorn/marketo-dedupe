var fs = require('fs');
var write = require('./writeFile.js');
var reorderID = require('./rearrangeByID.js');
var reorderEmail = require('./rearrangeByEmail.js');
var chooseValue = require('./chooseValue.js');
var reset = require('./resetFormat.js');

module.exports = {
  //reads file passed to it, returns array of objects to filter
  readFile : function (file, callback) {
    fs.readFile(file, 'utf8', function(err, data) {
      //reads file
        var file_data = JSON.parse(data).leads;
      //reorders by id for filtering
        var idOrder = reorderID.reOrder(file_data, '_id');
      //reformats an array of unique id entries
        var filtered_by_id = reset.resetFormat(idOrder);
      //takes array of unique ids and reorders it by email
        var emailOrder = reorderID.reOrder(file_data, 'email');
      //reformats into an array of unique email entries
        var filtered_by_email = reset.resetFormat(emailOrder);

        callback('output.json', filtered_by_email);
      });
  }
}
