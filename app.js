//Require files
var readFile = require('./js/dedupe.js');
var write = require('./js/writeFile.js');
var file = process.argv[2].toString();

write.writeFile('soureData.json', file);
readFile.deduplicate(file, write.writeFile);

/*
Need to figure out how to log entries that are removed
1. Can't plug it into deduplicate, it's not getting scoped correctly
2. Maybe reOrder returns an object with two props, the filtered array and the removed items, then dedupe combines them and uses the callback to write the file?
3. It has to happen between dedupe and filter

Chalk for logging if can't figure out the file writing for removed entries
Testing
*/
