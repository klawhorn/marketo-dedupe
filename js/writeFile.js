var fs = require('fs');
var format = require('./format.js');
var chalk = require('chalk');

module.exports = {
  //writesFile with reformatted data in
  writeFile : function (fileName, data_array) {
    fs.writeFile(fileName, format.leadsProp(data_array), 'utf8', function(){
      console.log(chalk.blue('New file written: ' + fileName));
    });
  }
}
