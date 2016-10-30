var fs = require('fs');
var write = require('./writeFile.js');
var reorderID = require('./rearrangeByID.js');
var reorderEmail = require('./rearrangeByEmail.js');
var chooseValue = require('./chooseValue.js');
var reset = require('./resetFormat.js');

module.exports = {
  //reads file passed to it, returns array of objects to filter
  readFile : function (file) {
    fs.readFile(file, 'utf8', function(err, data) {
        var file_data = JSON.parse(data).leads;
        var idOrder = reorderID.reOrderID(file_data);
        var new_array = reset.resetFormat(idOrder);
        console.log(new_array);


        // write.writeFile('farts.json', reorderID.reOrderID(file_data));
      });
  }
}
