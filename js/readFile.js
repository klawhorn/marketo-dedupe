var fs = require('fs');
var write = require('./writeFile.js');
var reorderID = require('./rearrangeByID.js');
var reorderEmail = require('./rearrangeByEmail.js');

module.exports = {
  //reads file passed to it, returns array of objects to filter
  readFile : function (file) {
    fs.readFile(file, 'utf8', function(err, data) {
        var file_data = JSON.parse(data).leads;
        // console.log(file_data);
        // console.log(reorderID.reOrderID(file_data));
        // console.log(reorderEmail.reOrderEmail(file_data));
        write.writeFile('farts.json', reorderID.reOrderID(file_data));
      });
  }
}
