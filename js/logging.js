var chalk = require('chalk');

module.exports = {
  appendReason : function (obj, explanation_string) {
    obj.reasonForRemoval = explanation_string;
    return obj;
  },
  summaryRemoved : function (obj, property) {
    var description = chalk.cyan('\n---------------DUPLICATE ENTRIES REMOVED!---------------\n')+chalk.green('The database contained duplicates for the following ')+chalk.red(property)+chalk.green(' values.\nThose displayed were removed.\n');;
    console.log(description);
    return;
  },
  greeting : function () {
    var design = chalk.magenta('+++++=====+++++=====+++++');
    var message = '\n1. See individual entryDate detail of duplicates vs output, and list of duplicate entries.\n2. Find your deduplicated file, as well as a copy of your source file and a file containing the entries that were removed (just in case you need them).';
    console.log('\n'+design+chalk.yellow('JSON DEDUPLICATION MACHINE')+design+message);
  },
  files : function () {
    var design = chalk.magenta('+++++=====+++++');
    console.log('\n'+design+chalk.yellow('FILE OUTPUT')+ design);
  },
  duplicateEntry : function (prop, value_existing, value_current, dupe_value) {
    var string = chalk.cyan('----------Duplicate ')+chalk.red(prop)+chalk.cyan(' value found: '+dupe_value+'----------');
    var existing = chalk.green('entryDate of more recent _id: ' + value_existing);
    var current = chalk.red('entryDate of _id to be removed: '+ value_current);
    console.log('\n'+string+'\n'+existing+'\n'+current);
  }
}
