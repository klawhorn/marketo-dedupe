var read = require('./js/readFile.js');
var write = require('./js/writeFile.js');
var file = process.argv[2].toString();

read.duplicateSourceFile(file, write.writeFile);
read.deduplicate(file, write.writeFile);
