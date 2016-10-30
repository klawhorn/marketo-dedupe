//Require files
var readFile = require('./js/readFile.js');
var file = process.argv[2].toString();

readFile.readFile(file);
