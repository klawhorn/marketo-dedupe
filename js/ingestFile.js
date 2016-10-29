var fs = require('fs');

module.exports = {
  parseJSON : function (file) {
    fs.readFile(file, 'utf8', function(err, data) {
      return JSON.parse(data).leads;
    }
};
