var chalk = require('chalk');

module.exports = {
  appendReason : function (obj, explanation_string) {
    obj.reasonForRemoval = explanation_string;
    return obj;
  },
  consoleLogRemoval : function (obj, property) {
    var description = chalk.cyan('\n---------------DUPLICATE ENTRIES REMOVED!---------------\n')+chalk.green('The database contained duplicates for the following ')+chalk.red(property)+chalk.green(' values.\nThose displayed were removed.\n');;
    console.log(description);
    return;
  },
  greeting : function () {
    var design = chalk.magenta('+++++=====+++++=====+++++');
    var message = '\n1. See detail below for each duplicate entry that was removed.\n2. Find your deduplicated file, as well as a copy of your source file and the and a file containing the entries that were removed (just in case you need them)';
    console.log('\n'+design+chalk.yellow('JSON DEDUPLICATION MACHINE')+design+message);
  },
  files : function () {
    var design = chalk.magenta('+++++=====+++++');
    console.log('\n'+design+chalk.yellow('FILE OUTPUT')+ design);
  }
}
