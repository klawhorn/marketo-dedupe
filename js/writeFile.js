var fs = require('fs');
var format = require('./format.js');

module.exports = {
  //writesFile with reformatted data in
  writeFile : function (fileName, data_array) {
    fs.writeFile(fileName, format.leadsProp(data_array), 'utf8', function(){
      console.log('New file written: ' + fileName);
    });
  }
}
