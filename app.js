//Require files
var read = require('./js/readFile.js');
var write = require('./js/writeFile.js');
var file = process.argv[2].toString();

read.readFile(file, write.writeFile);
