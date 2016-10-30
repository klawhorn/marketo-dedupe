//Require files
var readFile = require('./js/readFile.js');
var file = process.argv[2].toString();

readFile.readFile(file);

//writing file with reordered data.

//so. Keep moving foward with current structure, rename and reorganize later. Call reorder, call remove duplicates, call reorder, call remove duplicates, call write.
