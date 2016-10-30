var fs = require('fs');

module.exports = {
  //writesFile with reformatted data in
  writeFile : function (fileName, data_array) {
    function addLeadsProp (arr) {
      var object = {};
      object.leads = arr;
      return JSON.stringify(object);
    }
    fs.writeFile(fileName, addLeadsProp(data_array), 'utf8', function(){
      console.log('New file written: ' + fileName);
    });
  }
}
