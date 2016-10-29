var fs = require('fs');

module.exports = {
  writeFile : function (fileName, fileContents) {
    fs.writeFile(fileName, fileContents, 'utf8', function(){
      console.log('New file written: ' + fileName);
    });
  }
}
