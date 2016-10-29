//Require files
var ingestFile = require('./js/ingestFile.js');
var createOutput = require('./js/outputFile.js');

//take argument from command line for file to parse
var file = process.argv[2].toString();
//parseJSON and point directly to .leads
var sourceData = ingestFile.parseJSON(file);













// //output sourceFile
// createOutput.writeFile('sourceFile.json', sourceData);
// //output deduped data
// createOutput.writeFile('deduplicatedFile.json', ouputData);
// //removed entries
// createOutput.writeFile('deletedData.json', duplicateData);
