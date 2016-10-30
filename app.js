//Require files
var readFile = require('./js/dedupe.js');
var write = require('./js/writeFile.js');
var file = process.argv[2].toString();

write.writeFile('soureData.json', file);
readFile.deduplicate(file, write.writeFile);
