//Require files
var ingestFile = require('./js/ingestFile.js');

//take argument from command line for file to parse
var file = process.argv[2].toString();

var sourceDaata = ingestFile.parseJSON(file);
