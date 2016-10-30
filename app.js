//Require files
var file_actions = require('./js/fileActions.js');


//take argument from command line for file to parse
var file = process.argv[2].toString();



//parseJSON and point directly to .leads
// var data_array = file_actions.getObjectArray(file);

//trying to write a file with the array pulled from the original file.
file_actions.writeFile('newfile.json', file_actions.getObjectArray(file));









// //output sourceFile
// createOutput.writeFile('sourceFile.json', sourceData);
// //output deduped data
// createOutput.writeFile('deduplicatedFile.json', ouputData);
// //removed entries
// createOutput.writeFile('deletedData.json', duplicateData);


//so it's writing a file but the file is undefined.
